<template>
  <div class="row">
    <div class="col">
      <div class="w-100 wrap-grid">
        <div v-for="(box, index) in boxes" :key="box.id" :style="{gridArea: box.id}" class="f-center position-relative">
          <span class="start-arrow" v-if="box.id === 'm1'">התחלה<i class="las la-arrow-left "></i></span>
          <input :id="'input' + index" class="w-100 form-control text-center" v-model="box.num"
            @input="nextInput(index)" type="number" maxlength="1" :disabled="ifFreeze">
          <div class="position-absolute h2 m-0 operator" :class="box.class">{{box.operator}}</div>
        </div>
        <div class="result h1 f-center m-0">
          <template v-if="result < 0">0</template>
          <template v-else>
            <h2><span v-for="(letter, index) in result.toString().split('')" :key="index"
                :class="{'border-ans': index === 1}">{{letter}}</span></h2>
          </template>
        </div>
        <div class="story-box">
          יהדות מרוקו היא הקהילה היהודית הגדולה בארצות ערב, ובעבר הייתה הקהילה היהודית הגדולה בארצות האסלאם.
          ההתיישבות היהודית במרוקו החלה במאה ה-2 לספירה. בעת העתיקה עסקו רוב יהודי מרוקו במסחר. בתחילת המאה ה-8 אימצה
          מרוקו את האסלאם. תחת השלטון המוסלמי ידעו יהודי מרוקו תקופות של פריחה אך גם תקופות של רדיפות קשות. לאחר גירוש
          ספרד בשנת 1492 הגיעו המוני מגורשים למרוקו, ושימשו בתפקידים משמעותיים בממלכה. לאחר הפיכת מרוקו למדינת חסות של
          צרפת בשנת 1912, נהנו היהודים על פי רוב מביטחון גדול יותר, וממעמד חברתי וכלכלי משופר.
          לאורך הדורות הייתה יהדות מרוקו מרכז ליצירה תרבותית. מורשת יהדות ספרד של ימי הביניים השתלבה בתרבות של יהודי
          מרוקו לאחר גירוש ספרד, והשפעתה ניכרת בפסיקה ההלכתית ועוד.
          יהודי מרוקו שמרו על זיקה חזקה לארץ ישראל לאורך הדורות, וקבוצות של יהודים עלו לארץ והיוו חלק משמעותי מהיישוב
          הישן. ניצני הפעילות הציונית המודרנית הופיעו החל מראשית המאה ה-20, ואיתם החלה להתגבר העלייה ממרוקו. גורמים
          חיצוניים כגון פרעות נגד יהודים גם כן האיצו את קצב העלייה. לאחר הקמת מדינת ישראל ועד שנת 1967 עלו לארץ למעלה
          מ-250,000 יהודים ממרוקו. בראשית המאה ה-21 נותרו במרוקו עצמה כ-2,500 יהודים.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import part from '@/components/puzzle/part.vue'
  // import shuffle from '../helpers/shuffle'
  // import getRandNum from '../helpers/getRandNum'

  export default {
    name: 'gridStory',
    components: {
      // part
    },
    props: {
      ifFreeze: Boolean
    },
    // data() {
    //   return {

    //   }
    // },
    methods: {
      nextInput(index) {
        if (index < this.boxes.length - 1) {
          let elInput = document.getElementById('input' + (index + 1));
          elInput.focus()
        }
      }
    },
    computed: {
      boxes() {
        return this.$store.state.GgridStory.boxes;
      },
      result() {
        let result = +this.boxes[0].num;
        for (let i in this.boxes) {
          if (this.boxes[i].num && i > 0) {
            if (this.boxes[i].operator !== "+") {
              result += +this.boxes[i].num;
            } else if (this.boxes[i].operator !== "-") {
              result -= +this.boxes[i].num;
            }
          }
        }
        return result;
      },
      ifEndGame() {
        let check = true;
        for (let i in this.boxes) {
          if (this.boxes[i].num === "" || +this.result !== 17) {
            check = false;
          }
        }
        return check;
      }
    },
    watch: {
      result: function () {
        if (this.ifEndGame) {
          this.$emit('end-game');
        }
      }
    }


  }
</script>

<style scoped>
  .wrap-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-template-areas:
      "m1 m2 m3 m4 m5 m6"
      "m20 m21 result result result m7"
      "m19 story-box story-box story-box story-box m8"
      "m18 story-box story-box story-box story-box m9"
      "m17 story-box story-box story-box story-box m10"
      "m16 m15 m14 m13 m12 m11";
    gap: 3px;
  }

  .wrap-grid>* {
    /* border: solid rgb(63, 63, 63) 1px; */
    box-shadow: 1px 1px 5px #000000b0;
    background-color: #ffffffb8;
    padding: 5px;
    border-radius: 8px;

  }

  .story-box {
    grid-area: story-box;
    font-size: 20px;
  }

  .result {
    grid-area: result;
  }

  .operator {
    color: var(--main-color);
    z-index: 3;
    pointer-events: none;
  }

  .left {
    left: 0;
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }

  .right {
    right: 0;
  }

  .border-ans {
    border: solid 1px var(--main-color);
    border-radius: 3px;
  }

.start-arrow {
      position: absolute;
    top: 0;
    font-size: 24px;
}

  @media (max-width: 767.98px) {
    .wrap-grid {
      grid-template-rows: .5fr .5fr 1fr 1fr 1fr .5fr;

    }

    .story-box {
      font-size: 9px;
    }

    
.start-arrow {
          top: 1px;
    font-size: 12px;
    width: 118%;
    text-align: center;
    font-weight: 700;
}
  }
</style>
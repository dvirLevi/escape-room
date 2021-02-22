<template>
  <div class="row">
    <div class="col">
      <div class="w-100 wrap-grid">
        <div v-for="box in boxes" :key="box.id" :style="{gridArea: box.id}" class="f-center position-relative">
          <input class="w-100 form-control text-center" v-model="box.num" type="text">
          <div class="position-absolute h2 operator" :class="box.class">{{box.operator}}</div>
        </div>
        <div class="result h1 f-center m-0">
          = {{result}}
        </div>
        <div class="story-box">
          יהדות מרוקו היא הקהילה היהודית הגדולה בארצות ערב, ובעבר הייתה הקהילה היהודית הגדולה בארצות האסלאם.
          ראשית ההתיישבות היהודית במרוקו מתוארכת, על פי עדויות ארכאולוגיות, למאה ה-2 לספירה. בעת העתיקה התגוררו רוב
          היהודים בערי החוף של צפון אפריקה המערבית ועסקו בעיקר במסחר. בתחילת המאה ה-8 אימצה מרוקו את האסלאם. תחת השושלות
          המוסלמיות ידעו יהודי מרוקו תקופות של פריחה תרבותית וכלכלית ותקופות של רדיפות קשות. היחס ליהודים השתנה באופן
          תמידי בין שליט לשליט, והם סבלו בעיקר בתקופות של אי-יציבות. לאחר גירוש ספרד של שנת 1492 הגיעו המוני מגורשים
          למרוקו, ושימשו בתפקידים משמעותיים בניהול מסחר החוץ והדיפלומטיה של הממלכה. לאחר הפיכת מרוקו למדינת חסות של צרפת
          בשנת 1912, נהנו היהודים על פי רוב מביטחון גדול יותר, וממעמד חברתי וכלכלי משופר.
          לאורך הדורות הייתה יהדות מרוקו מרכז ליצירה תרבותית, ספרות ענפה ושירה עברית חוברו בה על ידי דורות של מלומדים
          יהודים. מורשת יהדות ספרד של ימי הביניים השתלבה בתרבות של יהודי מרוקו לאחר גירוש ספרד, והשפעתה ניכרת במסורות
          המוזיקה, הלשונות, הפסיקה ההלכתית, האמנות ועוד.
          יהודי מרוקו שמרו על זיקה חזקה לארץ ישראל לאורך הדורות, וקבוצות של יהודים עלו לארץ והיוו חלק משמעותי מהיישוב
          הישן. ניצני הפעילות הציונית המודרנית הופיעו החל מראשית המאה ה-20, ואיתם החלה להתגבר העלייה ממרוקו. גורמים
          חיצוניים כגון פרעות נגד יהודים גם כן האיצו את קצב העלייה. לאחר הקמת מדינת ישראל ועד שנת 1967 עלו אליה למעלה
          מ-250,000 יהודים ממרוקו, בעוד אחרים היגרו לארצות אירופה וצפון אמריקה ובעיקר לצרפת. בראשית המאה ה-21 נותרו
          במרוקו עצמה כ-2,500 יהודים.
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
    data() {
      return {
        boxes: [{
            num: "",
            operator: "+",
            class: "left",
            id: "m1"
          },
          {
            num: "",
            operator: "-",
            class: "left",
            id: "m2"
          },
          {
            num: "",
            operator: "+",
            class: "left",
            id: "m3"
          },
          {
            num: "",
            operator: "-",
            class: "left",
            id: "m4"
          },
          {
            num: "",
            operator: "+",
            class: "left",
            id: "m5"
          },
          {
            num: "",
            operator: "-",
            class: "bottom",
            id: "m6"
          },
          {
            num: "",
            operator: "+",
            class: "bottom",
            id: "m7"
          },
          {
            num: "",
            operator: "-",
            class: "bottom",
            id: "m8"
          },
          {
            num: "",
            operator: "+",
            class: "bottom",
            id: "m9"
          },
          {
            num: "",
            operator: "-",
            class: "bottom",
            id: "m10"
          },
          {
            num: "",
            operator: "+",
            class: "right",
            id: "m11"
          },
          {
            num: "",
            operator: "-",
            class: "right",
            id: "m12"
          },
          {
            num: "",
            operator: "+",
            class: "right",
            id: "m13"
          },
          {
            num: "",
            operator: "-",
            class: "right",
            id: "m14"
          },
          {
            num: "",
            operator: "+",
            class: "right",
            id: "m15"
          },
          {
            num: "",
            operator: "-",
            class: "top",
            id: "m16"
          },
          {
            num: "",
            operator: "+",
            class: "top",
            id: "m17"
          },
          {
            num: "",
            operator: "-",
            class: "top",
            id: "m18"
          },
          {
            num: "",
            operator: "+",
            class: "top",
            id: "m19"
          },
          {
            num: "",
            operator: "-",
            class: "left",
            id: "m20"
          },
          {
            num: "",
            operator: "+",
            class: "left",
            id: "m21"
          },
          // {
          //   num: "",
          //   operator: "-",
          //   class: "left",
          //   id: "m22"
          // },

        ]
      }
    },
    computed: {
      result() {
        let result = +this.boxes[0].num;
        for (let i in this.boxes) {
          if (this.boxes[i].num && i > 0) {
          console.log(i)

            if (this.boxes[i].operator !== "+") {
              result += +this.boxes[i].num;
            } else if (this.boxes[i].operator !== "-") {
              console.log(i)
              result -= +this.boxes[i].num;
            }
          }
        }
        // if (result < 0) {
        //   return 0
        // }
        return result;
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
  }

  .result {
    grid-area: result;
  }

  .operator {
    color: var(--main-color);
    z-index: 3;
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



  @media (max-width: 767.98px) {
    .wrap-grid {
      grid-template-rows: .5fr .5fr 1fr 1fr 1fr .5fr;

    }

    .story-box {
      font-size: 12px;
    }
  }
</style>
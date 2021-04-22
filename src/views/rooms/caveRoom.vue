<template>
  <div class="row row-cave position-relative mt-md-5 mt-3">
    <bg class="bg" coverOrContain="cover" opacity=".7" :img="require('@/assets/ass14.png')" />
    <div class="col-md-7 f-center-top mt-md-0 mt-5 order-md-1 order-2">
      <div class="w-100 f-center instarction">
        <!-- <h3 class="text-center p-3">סדרו את המספרים שקבלתם בכל חדר בסדר הרמוז באיגרת וגלו את הצופן שיפתח את התיבה</h3> -->
        <h3 class="text-center p-3">אלו המספרים שאספתם בחדרים אך הם מעורבבים. סדרו אותם בסדר הנכון משמאל לימין</h3>
        <div class="w-100 f-center">
          <h1 class="text-center fw-bold" v-for="code in shuffleCodes" :key="code.correct">{{code.correct}}</h1>
        </div>
      </div>
      <div class="wrap-box position-relative">
        <template v-if="!endEscapeRoom">
          <img class="w-100" src="@/assets/ass16.png" alt="">
          <div class="wrap-code-inputs f-center">
            <input class="form-control text-center" @input="checkIfCorrectOrder" v-for="code in codesCorrectOrder"
              v-model="code.input" :key="code.correct" type="text">
          </div>
        </template>
        <template v-else>
          <img class="w-100" src="@/assets/ass22.png" alt="">
        </template>

      </div>
    </div>
    <div class="col-md-5 f-center order-md-2 order-1">
      <div class="w-100" v-if="!endEscapeRoom">
        <h5 class="fw-bold text-center">לפניכם קלף סודי, עתיק וקדוש ובו ציטוטים מ"איגרת תימן" שנשלחה על ידי הרמב"ם. קראו
          את האיגרת, לאחר מכן הפכו
          אותה ותגלו את הרמז האחרון לפני פענוח קוד הכספת הסודית.</h5>
      </div>
      <div ref="scroll" class="w-75 wrap-scroll position-relative" @click="bookInversion = !bookInversion">
        <template v-if="!endEscapeRoom">
          <template v-if="!bookInversion">
            <img class="w-100" src="@/assets/ass20.png" alt="">
            <div class="wrap-text">
              <h4 class="">ושלמה המלך דימה אותנו לאשה יפה שאין בה דופי שנאמר "כלך יפה רעיתי ומום אין בך" (שיר השירים)
                ודימה
                שאר
                האמונות…כאנשי הבליעל השטופים בזמה ...שהם מפתים אותנו להחזירנו לדתותיהם…ואחר כך חזר בחכמתו בלשון תשובת
                האומה
                (=עם ישראל) כאלו היא אומרת לאותם שהם רוצים לפתותה ולהראות להם שסברתה מעולה מסברתם…התוכלו להראות לי כמו
                "מחולת
                המחנים" (שיר השירים) כלומר שהאומה תטעון כנגדם ואומרת להם הראונו כמו מעמד הר סיני שהיה בו מחנה אלהים
                ומחנה
                ישראל זה לעומת זה אז אשוב לעצתכם…ראה חכמת המשל וסודו שהוא החזיר מילת "שובי" ארבע פעמים בזה הפסוק להיות
                לרמז
                שאנו נרדפים ארבעה פעמים לצאת מן הדת בכל אחת מן המלכיות האלה הארבעה שאנו היום באחרונה מהן.
              </h4>
            </div>

          </template>
          <template v-else>
            <img class="w-100" src="@/assets/ass21.png" alt="">
            <div class="wrap-text">
              <h4 class="">הרמב"ם משלב באיגרת פסוקים מן התנ"ך ומסביר אותם. מיצאו באיגרת פסוק ובו מילים כמספר החדרים
                שפיצחתם
                עד כה.
                לכל מילה בפסוק יש "גימטריה קטנה" (ערך מספרי בסיסי ללא אפס. לדוגמא ז=7 וגם ע=7 (במקום 70)). אם תחשבו נכון
                תגלו שערך הגימטריה הקטנה של כל אחת מן המילים בפסוק שווה לאחד המספרים שגיליתם בחדרים הקודמים.
                אם תסדרו את המספרים בהתאמה לסדר הפסוק (מימין לשמאל) תגלו את סדר מספרי הקוד לכספת!!
                שאנו נרדפים ארבעה פעמים לצאת מן הדת בכל אחת מן המלכיות האלה הארבעה שאנו היום באחרונה מהן.
              </h4>
            </div>

          </template>
        </template>
        <template v-else>
          <img class="w-100" src="@/assets/ass20.png" alt="">
          <div class="wrap-text text-center">
            <h2>יישר-כח {{name}} השליח היקר!</h2>
            <h2>אכן הצופן הוא:</h2>
            <h4 class="fw-bold"><span class="ms-2" v-for="code in codesCorrectOrder"
                :key="code.correct">{{code.correct}}</span></h4>
            <h2>הצלחת לחלץ את האיגרת מהתיבה ובכך להציל את יהודי תימן</h2>
            <h2>הזמן שלקח לך לסיים את המשימה הוא:</h2>
            <h2 class="fw-bold">{{endTime.minutes}} דקות ו {{endTime.seconds}} שניות</h2>
            <autoAudio src="https://assets.mixkit.co/sfx/preview/mixkit-clapping-male-crowd-439.mp3" :ifLoop="false" :ifMuted="$store.state.ifMuted" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import arrangeSentences from '@/components/arrangeSentences.vue'
  import bg from '@/components/bg.vue'
  import shuffle from '@/helpers/shuffle'
  import autoAudio from '@/components/autoAudio.vue'

  export default {
    name: 'caveRoom',
    components: {
      autoAudio,
      bg
    },
    data() {
      return {
        bookInversion: false,
        // endEscapeRoom: false,
        // animationDirection: ""
      }
    },
    methods: {
      checkIfCorrectOrder() {
        if (this.ifCorrectOrder) {
          this.$store.commit('endEscapeRoom')
          setTimeout(() => {
            this.$refs.scroll.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "nearest"
            });
          }, 2000)
        }
      }
    },
    computed: {
      codesCorrectOrder() {
        return this.$store.state.codesCorrectOrder
      },
      endEscapeRoom() {
        return this.$store.state.endEscapeRoom
      },
      name() {
        return this.$store.state.name
      },
      endTime() {
        return this.$store.state.endTime
      },
      ifCorrectOrder() {
        let ifCorrect = this.codesCorrectOrder.filter((el) => {
          return el.correct !== +el.input
        })
        if (ifCorrect.length) return false
        return true
      },
      shuffleCodes() {
        return shuffle([...this.codesCorrectOrder])
      }
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Bellefair&display=swap');

  /* .row-cave {
   background-image: url('../../assets/ass14.png');
} */
  .wrap-box {
    width: 75%;
    margin-top: -11%;
    margin-right: -20%;
  }

  img {
    filter: drop-shadow(2px 2px 6px black);
  }

  .wrap-code-inputs {
    direction: ltr;
    width: 33%;
    position: absolute;
    bottom: 25%;
    left: 10.7%;
    transform: skewY(13deg);
  }

  .wrap-code-inputs input {
    width: 16.66%;
    padding: 0px;
    font-size: 20px;
  }

  .bg {
    filter: blur(3px);
  }

  .instarction h3 {
    background-color: var(--main-color);
    color: #fff;
    border-radius: 8px;
  }

  .instarction h1 {
    color: var(--main-color);
    background-color: #fff;
    margin: 1%;
    width: 14.66%;
    border-radius: 8px;
  }


  .wrap-scroll {
    padding-top: 135%;
  }

  .wrap-scroll img {
    position: absolute;
    top: 0;
  }

  .wrap-scroll .wrap-text {
    position: absolute;
    top: 9.5%;
    padding: 14%;
    font-family: 'Bellefair', serif;
  }

  .wrap-scroll h4 {
    font-size: 21px;
  }

  /* .to-right {
    animation: to-right 1s;
  }

  @keyframes to-right {
    from {
      transform: perspective(1220px) rotate3d(0, 1, 0,
        0deg);
    }

    to {
      transform: perspective(1220px) rotate3d(0, 1, 0,
        -90deg);
    }
  }

  .to-left {
    animation: to-right 1s;
  }

  @keyframes to-left {
    from {
      transform: perspective(1220px) rotate3d(0, 1, 0,
        -90deg);
    }

    to {
      transform: perspective(1220px) rotate3d(0, 1, 0,
        0deg);
    }
  } */

  @media (max-width: 1399px) {


    .wrap-scroll h4 {
      font-size: 18px;
    }
  }

  @media (max-width: 1199px) {


    .wrap-scroll h4 {
      font-size: 15px;
    }
  }

  @media (max-width: 991px) {
    .wrap-scroll h4 {
      font-size: 11px;
    }
  }

  @media (max-width: 767.98px) {
    .wrap-box {
      width: 83%;
    }

    .wrap-code-inputs {
      width: 38%;
      left: 8%;
    }

    .wrap-code-inputs input {
      font-size: 15px;
    }

    .wrap-scroll .wrap-text {
      top: 9.5%;
    }

    .wrap-scroll h4 {
      font-size: 3.7vw;
    }

    .wrap-scroll h2 {
      font-size: 20px;
    }
  }
</style>
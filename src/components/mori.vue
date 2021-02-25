<template>
  <div class="row">
    <div class="col">
      <div class="w-100 wrap-text p-3 img-cover">
        <h2 class="p-3">.(תטעומ םתסנרפ=) םתסנרפו םהייח יכרצ רעצמב ...הלא לכמו ,שמשו ןזח םג ,קדובהו טחושה אוה שרודהו
          ןיידה אוה הרומה
          אוה ,"יראמ" ברהל וארקי הלאה תוצראב לודג בר הל תאזה (הנטקה=) הרעצמה ריעה</h2>
        <h4 class="fw-bold">כדאי לקרוא גם את המשך המכתב:</h4>
        <h4>על כן גם המארי מסובל תחת עול המלאכה והעבודה אם נקלה אם נכבד. הרב הזה מארי יוסף בן סעיד מלא תורה יראה וחכמה
          ורוח דעת. בקי במקרא וביאוריו עד להפליא. בקי בתלמוד ברמב"ם ועד אחרונים כאחד המורים הגדולים בארצותינו וידיו רב
          לו בחכמת הקבלה בשנון גדול, הזוהר וכתבי האר"י למודים על לשונו בעליל כל עלה (=דף) ועמוד, וכח זכרונו רב מאוד..
          ועל כל אלה גדלה ענותנותו ואהבת בני אדם. עם פנים שוחקות מדברותיו נאוה... והוא כבן ארבעים שנה. מהלכו מנהגו
          ומלבושיו כמנהג המדינה, וזר הרואהו יחשבנו לאיכר או רועה צאן... לו חנות אצל ביתו בחור ההר כמו מערה... גם בעשותם
          בעבודה הקשה הזאת מצאתים נדברים יחד בדברי תורה חכמה ומוסר. ופה בחנות יורה ידין ויועץ בכל דברי הקהלה... הפעם
          נכנסתי לחנותו מן הבוקר... ואיכר גוי אחד אץ עליו לכלות מלאכתו... והוא מכה במקבת על הסדן והאיכר נוגש עליו כלה
          מלאכתך!... מכאב לב ומשבר רוח עניתיו: אשריך מארי יוסף שפחמי אתה (מתפרנס מהכנת פחם) ואוי... למתנהגים ברבנות
          (=מחפשים כבוד)</h4>
      </div>
      <div class="w-100">
        <div class="w-100 f-center"></div>
        <div class="w-100 f-center-right mt-3">
          <!-- <div class="w-75"> -->
            <input class="form-control" v-model="text" type="text">
          <!-- </div>
          <div class="w-25 pe-2"> -->
            <button class="g-butt bg-gradient h6 me-2 p-2 m-0" type="submit">בדיקה</button>
          <!-- </div> -->
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
    name: 'mori',
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
            if (this.boxes[i].operator !== "+") {
              result += +this.boxes[i].num;
            } else if (this.boxes[i].operator !== "-") {
              result -= +this.boxes[i].num;
            }
          }
        }
        return result;
      }
    }


  }
</script>

<style scoped>
  .wrap-text {
    background-image: url("../assets/ass10.png");
    border-radius: 8px;
    box-shadow: 2px 3px 10px #3d3d3d;
  }

  .wrap-text h2 {
    border: solid 2px rgb(0, 0, 0);
    border-radius: 8px;
  }

  input {
    width: 250px;
  }



  @media (max-width: 767.98px) {
     input {
    width: 150px;
  }
  }
</style>
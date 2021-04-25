<template>
  <div class="row">
    <div class="col">
      <div class="w-100">
        <div class="w-100 f-center-right ">
          <div class="h5 mb-0 p-md-3 p-1 mt-3 pt-3 pb-3 text-center ans" v-for="(ans, index) in correctAnswers"
            :key="ans.id">{{index+1}}. {{ans.ans}}</div>
        </div>
        <div class="w-100 f-center-right" v-if="answers.length">
          <input class="form-control" v-model="textInput" type="text">
          <button class="g-butt bg-gradient h6 me-2 p-2 m-0" @click="checkAns" type="submit">בדיקת תפקיד המארי</button>
        </div>
      </div>
      <div class="w-100 wrap-text p-3 img-cover mt-3">
        <h4>העיר המצערה (=הקטנה) הזאת לה רב גדול בארצות האלה יקראו להרב "מארי",</h4>
        <h2 class="p-3">.(תטעומ םתסנרפ=) םתסנרפו םהייח יכרצ רעצמב ...הלא לכמו ,שמשו ןזח םג ,קדובהו טחושה אוה שרודהו
          ןיידה אוה הרומה
          אוה</h2>
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
      
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import part from '@/components/puzzle/part.vue'
  // import shuffle from '../helpers/shuffle'
  // import getRandNum from '../helpers/getRandNum'
  import Swal from 'sweetalert2'

  export default {
    name: 'mori',
    components: {
      // part
    },
    data() {
      return {
        textInput: "",
        // answers: [{
        //     ans: "מורה",
        //     id: 1
        //   },
        //   {
        //     ans: "דיין",
        //     id: 2
        //   },
        //   {
        //     ans: "דורש",
        //     id: 3
        //   },
        //   {
        //     ans: "שוחט",
        //     id: 4
        //   },
        //   {
        //     ans: "בודק",
        //     id: 5
        //   },
        //   {
        //     ans: "חזן",
        //     id: 6
        //   },
        //   {
        //     ans: "שמש",
        //     id: 7
        //   }
        // ],
        // correctAnswers: []
      }
    },
    methods: {
      checkAns() {
        let ifCorrect = false;
        for (let i in this.answers) {
          if (this.answers[i].ans === this.textInput) {
            this.correctAnswers.push(this.answers[i]);
            this.answers.splice(i, 1);
            this.textInput = "";
            ifCorrect = true;
             Swal.fire({
            title: 'יפה מאוד',
            timer: 1200,
            icon: 'success',
          })
          }
        }
        if(!ifCorrect) {
          this.textInput = "";
          Swal.fire({
            title: 'תפקיד המורי שהזנת שגוי',
            text: 'נסה שוב',
            timer: 1200,
            icon: 'error',
          })
        }
        if (this.correctAnswers.length === 7) {
          this.$emit('end-game');
        }
      }
    },
    computed: {
      answers() {
        return this.$store.state.Gmori.answers;
      },
      correctAnswers() {
        return this.$store.state.Gmori.correctAnswers;
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

  .ans {
    width: 24%;
    margin-left: 1%;
    background-color: var(--main-color);
    color: #fff;
    border-radius: 8px;
    border: solid 2px rgba(0, 0, 0, 0);
  }



  @media (max-width: 767.98px) {
    input {
      width: 150px;
    }
  }
</style>
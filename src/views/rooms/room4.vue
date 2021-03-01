<template>
  <div class="row mt-3">
    <div class="col">
      <div class="row">
        <div class="col-md-2 f-center-right-top main-color">
          <router-link to="/MainRoom">
            <h5 class="fw-bold"><i class="las la-angle-double-right"></i> חזרה לחדר הראשי</h5>
          </router-link>
        </div>
        <div class="col-md-10">
          <h5>שלחת מברק דחוף לתימן בו אתה מבקש מן היהודים שיפנו לרבם ה"מורי" שיתפלל להצלחת המבצע. ילדי תימן שולחים לך
            מכתב חוזר המתאר את ה"מורי" שלהם אך הם רגילים לכתוב הפוך שהרי כך למדו בעניותם ששה שבעה מסביב לספר אחד...</h5>
          <!-- <h5>רב הקהילה שנקרא כאמור לעיל "מורי", לא קיבל משכורת כלל אלא היה מתפרנס ממעשה ידיו. אף על פי של"מורי" לא היה
            איפוא זמן פנוי ללמוד כמו לרבנים בארצות אחרות (שהתפרנסו מהציבור וכל שעותיהם היו פנויות ללימוד), רמת תלמודם של
            רבני תימן הייתה מן הגבוהות, ביטוי נאה לכך נתן הנוסע הירושלמי (יליד פולין) הרב יעקב ספיר שביקר בתימן בשנת
            1859 בהגיעו לעיירה ג'רואח: וכך הוא מתאר את אשר ראו עיניו:</h5> -->
          <h5>מצאו בכתב ההפוך כמה תפקידים ל"מורי" (רב הקהילה) בהנהגת הקהילה והזינו אותם בשדה הטקסט שלהלן ככתבם ללא אותיות החיבור. מצאו את הצופן ותפילת ה"מורי" תסייע לכם לפצח
            את המנעול!</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 order-md-0 order-1 f-center-top position-relative">
          <checkCode :dataRoom="correntRoom" />
          <img src="@/assets/ass12.jpg" class="jug border-r">
        </div>
        <div class="col-md-10 order-md-1 order-0">
          <mori />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import mori from '@/components/mori.vue'
  import checkCode from '@/components/checkCode.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room4',
    components: {
      mori,
      checkCode
    },
    data() {
      return {

      }
    },
    computed: {
      correntRoom() {
        return this.$store.state.rooms.filter((el) => {
          return el.id === +this.$route.name;
        })[0]
      }
    }
  }
</script>

<style scoped>
  .jug {
    width: 185px;
    margin-top: 30px;
    /* top: -101px; */
    /* left: -109px; */
    transform: rotate(-5deg);
  }

  @media (max-width: 767.98px) {
    .jug {
      position: relative;
      top: -45px;
      left: -60px;
      z-index: -1;
    }
  }
</style>
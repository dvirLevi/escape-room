<template>
  <div class="row mt-3">
    <div class="col">
      <div class="row">
        <div class="col-md-2 f-center-right-top main-color">
          <router-link to="/MainRoom">
            <h5><i class="las la-angle-double-right"></i> חזרה לחדר הראשי</h5>
          </router-link>
        </div>
        <div class="col-md-10">
          <h3>השליח חייב להגיע לשטרות הכסף שגזלו שליחי משיח השקר מן היהודים. בהם יוכל לשחד את הרשעים במידה ולא יתנו לו לעבור במעברי הגבול אבל...חייבים להוציא ולהסתיר את כל שטרות הרמב"ם כדי שלא ידעו שהרמב"ם הוא זה ששלח את האגרת שהרי אם יוודע הדבר הרמב"ם צפוי לעונש כבד</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 order-md-0 order-1 f-center-top position-relative">
          <checkCode :dataRoom="correntRoom" />
          <img src="@/assets/ass8.png" class="jug">
        </div>
        <div class="col-md-10 order-md-1 order-0">
          <moneyBills />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import moneyBills from '@/components/moneyBills.vue'
  import checkCode from '@/components/checkCode.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      moneyBills,
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
    width: 143px;
    margin-top: 30px;
    /* top: -101px; */
    /* left: -109px; */
    transform: rotate(-11deg);
  }

  @media (max-width: 767.98px) {
    .jug {
      position: absolute;
      width: 81px;
      top: 0;
      left: 27px;
      z-index: -1;
    }
  }
</style>
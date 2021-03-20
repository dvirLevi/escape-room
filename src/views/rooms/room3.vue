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
          <h3>יהודי מרוקו קבלו מידע סודי בדבר אחד ממספרי הקוד לתיבה הסודית. הם החליטו לצאת לעזרת אחיהם שבתימן אך כדי שהמידע לא יחשף על ידי השלטונות הם הצפינו את הקוד במכתב תמים המתאר את חייהם בעבר ובעתיד וכך העבירו אותו לשליח...</h3>
          <h3>מלאו ספרות בודדות מימין לשמאל התעלמו מאפסים.</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 order-md-0 order-1 f-center-top position-relative">
          <checkCode :dataRoom="correntRoom" />
          <img src="@/assets/ass9.png" class="jug">
        </div>
        <div class="col-md-10 order-md-1 order-0">
          <gridStory @end-game="$store.commit('endTask', correntRoom.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import gridStory from '@/components/gridStory.vue'
  import checkCode from '@/components/checkCode.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room3',
    components: {
      gridStory,
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
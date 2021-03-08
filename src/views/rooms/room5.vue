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
          <h3>קהילת בני המנשה החליטו לשתף פעולה עם השליח לתימן אך מחשש להתנכלות זרים הוחלט שרק חובשי הכובעים השחורים יגלו את
            הקוד למנעול הנכון. כמה כאלה יש בקהל (כובעים ממש לא כובע גרב)? מצאו אותם ולחצו על הכובע שלהם</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 order-md-0 order-1 f-center-top position-relative">
          <checkCode :dataRoom="correntRoom" />
          <img src="@/assets/ass8.png" class="jug">
        </div>
        <div class="col-md-10 order-md-1 order-0">
          <findInImg @end-game="$store.commit('endTask', correntRoom.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import findInImg from '@/components/findInImg.vue'
  import checkCode from '@/components/checkCode.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      findInImg,
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
      position: relative;
      width: 81px;
      top: -45px;
      left: -103px;
      z-index: -1;
    }
  }
</style>
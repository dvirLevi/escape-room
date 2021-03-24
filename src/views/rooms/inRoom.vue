<template>
  <div class="row mt-3">
    <div class="col">
      <div class="row">
        <div class="col-md-2 f-center-right main-color">
          <router-link to="/MainRoom">
            <h5 class="fw-bold"><i class="las la-angle-double-right"></i> חזרה לחדר הראשי</h5>
          </router-link>
        </div>
        <div class="col-md-10">
          <h3>סדרו את המפה שתנחה את השליח מתימן לספרד</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 order-md-0 order-1 f-center-top position-relative">
          <checkCode :dataRoom="correntRoom" />
          <img src="@/assets/ass8.png" class="jug">
        </div>
        <div class="col-md-10 order-md-1 order-0">
          <puzzle :ifShuffle="correntRoom.ifResolved" @end-game="$store.commit('endTask', correntRoom.id)" />
          <moneyBills @end-game="$store.commit('endTask', correntRoom.id)" />
          <gridStory @end-game="$store.commit('endTask', correntRoom.id)" />
          <mori @end-game="$store.commit('endTask', correntRoom.id)" />
          <findInImg @end-game="$store.commit('endTask', correntRoom.id)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import puzzle from '@/components/puzzle.vue'
  import moneyBills from '@/components/moneyBills.vue'
  import gridStory from '@/components/gridStory.vue'
  import mori from '@/components/mori.vue'
  import findInImg from '@/components/findInImg.vue'
  import checkCode from '@/components/checkCode.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      puzzle,
      moneyBills,
      gridStory,
      mori,
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
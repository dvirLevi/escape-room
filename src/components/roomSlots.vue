<template>
  <div class="row mt-3">
    <div class="col">
      <div class="row">
        <div class="col-md-2 f-right-top main-color">
          <router-link to="/MainRoom">
            <h4 class="fw-bold mt-1 f-center">
              <span class="material-icons-outlined">
                double_arrow
              </span>חזרה לחדר הראשי</h4>
          </router-link>
        </div>
        <div class="col-md-10">
          <slot name="inst"></slot>
          <!-- <h3>סדרו את המפה שתנחה את השליח מתימן לספרד</h3> -->
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 order-md-0 order-1 f-center-top position-relative">
          <checkCode :dataRoom="correntRoom" />
          <img :src="img" class="jug">
        </div>
        <div class="col-md-10 order-md-1 order-0">
          <slot name="task"></slot>
          <!-- <puzzle :ifShuffle="correntRoom.ifResolved" @end-game="$store.commit('endTask', correntRoom.id)" /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import checkCode from '@/components/checkCode.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'roomSlots',
    components: {
      checkCode
    },
    props: {
      img: String,
      correntRoom: Object
    },
    data() {
      return {

      }
    },
    // computed: {
    //   correntRoom() {
    //     return this.$store.state.rooms.filter((el) => {
    //       return el.id === +this.$route.name;
    //     })[0]
    //   }
    // }
  }
</script>

<style scoped>
  img {
    width: 143px;
    margin-top: 30px;
    /* top: -101px; */
    /* left: -109px; */
    transform: rotate(-11deg);
    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    img {
      position: relative;
      width: 81px;
      top: -45px;
      left: -103px;
      z-index: -1;
    }
  }
</style>
<template>
  <div class="row mt-3">
    <div class="col">
      <div class="row">
        <div class="col-lg-2 f-right-top main-color">
          <router-link to="/MainRoom">
            <h5 class="fw-bold mt-1 f-center g-butt p-2">
              <span class="material-icons-outlined">
                double_arrow
              </span>חזרה לחדר הראשי</h5>
          </router-link>
        </div>
        <div class="col-lg-10">
          <slot name="inst"></slot>
          <!-- <h3>סדרו את המפה שתנחה את השליח מתימן לספרד</h3> -->
        </div>
      </div>
      <div class="row">
        <div class="col-lg-2 order-lg-0 order-1">
          <div class="row">
            <div class="col-lg-12 col-9">
              <checkCode :dataRoom="correntRoom" />
            </div>
            <div class="col-lg-12 col-3 pt-3 text-center">
              <img class="w-100" :src="img">
            </div>
          </div>
        </div>
        <div class="col-lg-10 order-lg-1 order-0">
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
    /* width: 65%; */
    /* margin-top: 30px; */
    /* transform: rotate(-11deg); */
    border-radius: 8px;
  }

  h5 , h5 span {
font-size: 1.1vw !important;
  }

  @media (max-width: 991.98px) {
    /* img {
      position: relative;
      width: 15%;
      top: -45px;
      left: -103px;
      z-index: -1;
    } */
     h5 , h5 span {
font-size: 20px !important;
  }
  }
</style>
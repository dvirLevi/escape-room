<template>
  <div class="row min-height-screen position-relative">
    <bg :img="require('../assets/ass.jpg')" />
    <div class="col ">
      <div class="container p-0">
        <timer class="mt-1"/>
        <router-view></router-view>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  // import aInput from '@/components/aInput.vue'
  import bg from '@/components/bg.vue'
  import timer from '@/components/timer.vue'

  export default {
    name: 'MainRoom',
    components: {
      // aInput,
      bg,
      timer
    },
    data() {
      return {
        // name: ""
      }
    },
    // beforeUnmount () {
    //  alert('You are trying to leave.');
    // }

  }
</script>

<style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&display=swap'); */

  h1 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 800;
    font-size: 60px;
    color: #d80806;
  }

  h2 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 400;
    font-size: 50px;
  }


  .el {
    position: absolute;
    opacity: 0.6;
    z-index: -1;
  }

  .journey-el {
    width: 37%;
    bottom: -7%;
    right: 48%;
  }

  .col-4 {
    background-image: url('../assets/ass7.png');
    height: 280px;
  }


  @media (max-width: 767.98px) {
    h1 {
      font-size: 40px;
    }

    h2 {
      font-size: 32px;
    }

    .journey-el {
      width: 58%;
      bottom: 8%;
      right: 32%;
    }

     .col-4 {
    /* background-image: url('../assets/ass7.png'); */
    height: 200px;
  }
  }
</style>
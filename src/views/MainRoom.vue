<template>
  <div class="row min-height-screen position-relative">
    <bg :img="require('../assets/ass.jpg')" />
    <div class="col ">
      <div class="container p-0">
        <timer class="mt-1"/>
        <div class="row">
          <div class="col position-relative">
            <div class="row">
              <div class="col-4 img-contain mt-3 c-p" v-for="i in 6" :key="i">
              </div>
            </div>
            <!-- <h1>שלום {{$store.state.name}}, נבחרת להיות שליח למשימה סודית!</h1>
            <h2>סיפור מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת הההההההסיפור מסגרת סיפור מסגרת הההסיפור מסגרת סיפור
              מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת סיפור מסגרת
              סיפור מסגרת סיפור מסגרת סיפור מסגרת </h2>
            <button class="g-butt bg-gradient mt-3 h2 p-2 ps-3 pe-3" type="submit">התחל מסע</button> -->
            <!-- <img src="@/assets/ass6.png" class="el journey-el"> -->
          </div>
        </div>
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
    //   alert()
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
  }
</style>
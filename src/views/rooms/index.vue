<template>
  <div class="row position-relative">
    <div class="col">
      <div class="row">
      <div class="col f-center">
        <h3 class="text-center">כנסו לחדרים פתרו את החידות ומצאו ספרה שתהיה חלק מהצופן שיפתח את התיבה שבה מוצפנת האיגרת</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-4 f-center mt-3 " v-for="room in $store.state.rooms" :key="room.id">
      <router-link :to="room.link" class="door f-center-top img-contain c-p" :style="{filter:`drop-shadow(0px 4px 6px black) ${room.ifResolved? 'saturate(1.1)':'saturate(0.6)'}`}">
        <h4 class="mt-md-4 fw-bold">{{room.text}}</h4>
        <h2 class="w-100 text-center fw-bold main-color" v-if="room.ifResolved">{{room.code}}</h2>
      </router-link>
    </div>
    </div>
    <div class="row mt-5 pb-5">
      <div class="col f-center">
        <div class="cave img-contain c-p">
        <img class="fence" src="@/assets/ass15.png" alt="">
        <img class="treasure-box" src="@/assets/ass16.png" alt="">
      </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import aInput from '@/components/aInput.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'index',
    components: {},
    data() {
      return {
       
      }
    },
  }
</script>

<style scoped>
  
  h2 {
    margin-top: 100px;
    text-shadow: 1px 2px 4px #000000;
  }

  h4 {
    background-color: #6f4a32;
    color: #fff;
    padding: 4px;
    border-radius: 3px;
  }

  .door {
    background-image: url('../../assets/ass7.png');
    width: 50%;
    height: 280px;
  }

  .cave {
    width: 50%;
    padding-top: 30%;
    background-image: url('../../assets/ass14.png');
    position: relative;
  }

  .fence {
    position: absolute;
    top: 32%;
    right: 19%;
    width: 55%;
    z-index: 1;
  }

  .treasure-box {
    position: absolute;
    top: 56%;
    right: 33%;
    width: 27%;
    z-index: 0;
  }

  @media (max-width: 767.98px) {
    .door {
    width: 100%;
    height: 180px;
  }

  h3 {
    font-size: 18px;
  }

  h4 {
    font-size: 13px;
    margin-top: 22px;
  }

   h2 {
    margin-top: 50px;
  }

  .cave {
    width: 75%;
    padding-top: 45%;
  }
  }
</style>
<template>
  <div class="row position-relative">
    <div class="row">
      <div class="col f-center">
        <h3 class="text-center">כנסו לחדרים פתרו את החידות ומצאו ספרה שתהיה חלק מהצופן שיפתח את התיבה שבה מוצפנת האיגרת</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-4 f-center mt-3 " v-for="room in $store.state.rooms" :key="room.id">
      <router-link :to="room.link" class="door f-center-top img-contain c-p">
        <h3 class="mt-4">{{room.text}}</h3>
      </router-link>
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
  h3 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 800;
  }

  .door {
    background-image: url('../../assets/ass7.png');
    width: 50%;
    height: 280px;
  }


  @media (max-width: 767.98px) {
    .door {
    background-image: url('../../assets/ass7.png');
    width: 100%;
    height: 180px;
  }

  h3 {
    font-size: 18px;
  }
  }
</style>
<template>
  <div class="row position-relative">
    <div class="row">
      <div class="col f-center">
        <h3 class="text-center">כנסו לחדרים פתרו את החידות ומצאו ספרה שתהיה חלק מהצופן שיפתח את התיבה שבה מוצפנת האיגרת</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-4 f-center mt-3 " v-for="room in rooms" :key="room.id">
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
        rooms: [{
            text: "חדר 1",
            link: "/MainRoom/room1",
            id: 1
          },
          {
            text: "חדר 2",
            link: "",
            id: 2
          },
          {
            text: "חדר 3",
            link: "",
            id: 3
          },
          {
            text: "חדר 4",
            link: "",
            id: 4
          },
          {
            text: "חדר 5",
            link: "",
            id: 5
          },
          {
            text: "חדר 6",
            link: "",
            id: 6
          },
        ]
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
<template>
  <div class="row min-height-screen position-relative">
    <bg :img="require('../assets/ass.jpg')" />
    <div class="col ">
      <div class="container p-0">
        <div class="row mt-5">
          <div class="col position-relative">
            <h1>שלום {{$store.state.name}}, נבחרת להיות שליח למשימה סודית!</h1>
            <h2>יהודי תימן במצב קשה. משיח שקר ועוזריו מתנכלים ליהודים ורוצים להעבירם על דתם.
בכוחך להציל אותם משמד על ידי העברת אגרת חשובה שכתב להם הרמב"ם ובכוחה לסייע להם.
עלייך להעביר את האגרת מהרמב"ם לתימן הרחוקה במהירות האפשרית - לפני שהדבר יוודע והאגרת תושמד.
בכל אחת מהדלתות שבמסך תוכלו להגיע לחידה שבפתירתה תוכלו להזין את הקוד הסודי שיפתח את התיבה.</h2>
            <button class="g-butt bg-gradient mt-3 mb-3 h2 p-2 ps-3 pe-3" @click="$router.push('/MainRoom')">קדימה למשימה!</button>
            <img src="@/assets/ass6.png" class="el journey-el">
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

  export default {
    name: 'Story',
    components: {
      // aInput,
      bg
    },
    data() {
      return {
        // name: ""
      }
    },
    methods: {
      // pushName() {
      //   this.$store.commit('pushName', this.name)
      // }
    }

  }
</script>

<style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&display=swap'); */

  h1 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 800;
    font-size: 50px;
    color: #d80806;
  }

  h2 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 400;
    font-size: 40px;
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


  @media (max-width: 767.98px) {
    h1 {
      font-size: 30px;
    }

    h2 {
      font-size: 23px;
    }

    .journey-el {
      width: 58%;
      bottom: 8%;
      right: 32%;
    }
  }
</style>
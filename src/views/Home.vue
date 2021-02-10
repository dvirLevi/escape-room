<template>
  <div class="row min-height-screen f-center position-relative">
    <bg :img="require('../assets/ass.jpg')" />

    <!-- <div class="wrap-bg position-relative w-100">

    </div> -->
    <div class="col ">
      <!-- <div class="bg img-cover w-100 h-100">

      </div> -->
      <div class="container p-0">
        <div class="row mt-md-5 mt-0">
          <div class="col-md-3 position-relative mt-md-0 mt-5">
            <img src="@/assets/ass1.png" class="el lock-el">
            <form class="pb-5 pr-4 pl-4" @submit.prevent="pushName">
              <h3 class="font-weight-bolder">הוראות</h3>
              <ul class="ps-0 font-weight-bolder">
                <li>חדר הבריחה מתאים כמשחק תחרותי לקבוצות וכאתגר לשחקן יחידי</li>
                <li>למשחק מרובה משתתפים כל שחקן/קבוצה יחזיק/ו מכשיר שבו יוכל/ו לשחק</li>
                <li>מי שיגיע לסיום ראשון הוא המנצח!</li>
              </ul>
              <div class="w-100 ps-3">
                <aInput class="mt-4" v-model="name" placeholder="שם שחקן" />
              </div>
              <button class="g-butt bg-gradient mt-5 h5 p-2 w-50 " type="submit">התחלה</button>
            </form>
          </div>
          <div class="col-md-9 text-center f-center-column pt-5 pb-5 position-relative">
            <img src="@/assets/ass3.png" class="el building-el">
            <img src="@/assets/ass4.png" class="el page-el">
            <img src="@/assets/ass5.png" class="el box-el">
            <h1 class="m-0">חדר בריחה</h1>
            <h2>מרכז מורשת הרמב"ם ועדות ישראל</h2>
            <img class="w-25" src="@/assets/ass2.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  // @ is an alias to /src
  import aInput from '@/components/aInput.vue'
  import bg from '@/components/bg.vue'

  export default {
    name: 'Home',
    components: {
      aInput,
      bg
    },
    data() {
      return {
        name: ""
      }
    },
    methods: {
      pushName() {
        this.$store.commit('pushName', this.name);
        this.$router.push("/Story")
      }
    }

  }
</script>

<style scoped>
  /* @import url('https://fonts.googleapis.com/css2?family=Miriam+Libre:wght@400;700&display=swap'); */

  .el {
    position: absolute;
    opacity: 0.6;
    z-index: -1;
  }

  .lock-el {
    width: 50%;
    top: 37%;
    right: 42%;
  }

  .building-el {
    width: 300px;
    bottom: 0%;
    left: 0%;
  }

  .page-el {
    width: 200px;
    top: 0%;
    right: 10%;
  }

  .box-el {
    width: 200px;
    top: 0%;
    left: 10%;
  }

  /* .col-md-9 {
    background-color: #161616;
  } */

  h1 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 800;
    font-size: 120px;
    color: #d80806;
  }

  h2 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 400;
    font-size: 39px;
  }

  li {
    font-size: 23px;
  }

  @media (max-width: 767.98px) {
    h1 {
      font-size: 65px;
    }

    h2 {
      font-size: 21px;
    }

    .col-md-9 {
      order: 1;
    }

    .col-md-3 {
      order: 2;
    }

    .lock-el {
      top: 25%;
    }

    .building-el {
      width: 100px;
      /* bottom: 0%; */
      left: 5%;
    }

    .page-el {
      width: 90px;
      top: 10%;
      /* right: 10%; */
    }

    .box-el {
      width: 90px;
      /* top: 0%; */
      /* left: 10%; */
    }
  }
</style>
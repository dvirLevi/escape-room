<template>
  <div class="row min-height-screen position-relative">
    <autoAudio src="../audio/story.mp3"
      :ifMuted="$store.state.ifMuted" />
    <!-- <bg :img="require('../assets/ass.jpg')" /> -->
    <div class="col ">
      <div class="container p-0">
        <div class="row mt-5">
          <div class="col position-relative">
            <!-- <img src="@/assets/ass11.png" class="el secret-el"> -->
            <h1 class="position-relative">שלום {{$store.state.name}}, נבחרת להיות שליח למשימה סודית! <img
                src="@/assets/ass11.png" class="el secret-el"></h1>
            <textTyping class="text-typing p-3 mb-3" :text="text" fontFamily="Miriam Libre" color="#fff"
              @end-typing="showButt = true" />
            <template v-if="showButt">
              <button ref="button" class="g-butt bg-gradient h2 p-2 ps-3 pe-3" @click="$router.push('/MainRoom')">קדימה
                למשימה!</button>
              <img src="@/assets/ass6.png" class="el journey-el">
            </template>
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
  import textTyping from '@/components/textTyping.vue'
  import autoAudio from '@/components/autoAudio.vue'

  export default {
    name: 'Story',
    components: {
      autoAudio,
      textTyping,
      // bg
    },
    data() {
      return {
        showButt: false,
        text: `יהודי תימן במצב קשה. משיח שקר ועוזריו מתנכלים ליהודים ורוצים להעבירם על דתם.
בכוחך להציל אותם משמד על ידי העברת אגרת חשובה שכתב להם הרמב"ם ובכוחה לסייע להם.
עוזרי משיח השקר גנבו את האיגרת והצפינו אותה בתיבה נעולה עליך לחלץ את האיגרת מהתיבה על ידי גלוי הקוד הסודי בו היא נעולה ולהעביר את האגרת מהרמב"ם לתימן הרחוקה במהירות האפשרית - לפני שהדבר יוודע והאגרת תושמד.
בכל אחת מן הדלתות שעל המסך תוכל להגיע לחידה שבפתירתה תקבל רמז לחלק מהצופן שיסייע בהמשך לחשוף את הקוד הסודי בשלימותו.`,
      }
    },
    watch: {
      showButt: function () {
        setTimeout(() => {
          this.$refs.button.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          }, 200);
        })
      }
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

  /* h2 {
    font-family: 'Miriam Libre', sans-serif;
    font-weight: 400;
    font-size: 40px;
  } */


  .el {
    position: absolute;
    opacity: 0.6;
    z-index: -1;
  }

  .journey-el {
    width: 150px;
    bottom: -5%;
    right: 20%;
  }

  .secret-el {
     width: 14%;
    top: -107%;
    right: -3%;
    transform: rotate( 
20deg
 );
    opacity: 0.4;
    z-index: 0;
  }

  .text-typing {
    font-family: 'Miriam Libre', sans-serif;
    background-color: #000;
    font-size: 35px;
    color: #fff;
    /* min-height: 450px; */
    border-radius: 8px;
  }


  @media (max-width: 767.98px) {
    h1 {
      font-size: 30px;
    }

    /* h2 {
      font-size: 23px;
    } */

    .text-typing {
      font-family: 'Miriam Libre', sans-serif;
      background-color: #000;
      font-size: 23px;
      color: #fff;
      /* min-height: 690px; */
      border-radius: 8px;
    }

    .journey-el {
      width: 111px;
      bottom: -1%;
      right: 55%;
    }

    .secret-el {
      width: 38%;
      top: 37%;
      right: -4%;
      transform: rotate(20deg);
    }
  }
</style>
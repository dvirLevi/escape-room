<template>
  <div ref="checkCode" class="w-100 wrap-check img-contain f-right-top position-relative">
    <bg coverOrContain="contain" :img="require('@/assets/ass17.png')" />
    <autoAudio v-if="play" :src="srcAudio" :ifLoop="false" :maxVol="1" :increment="1" :speedOfIncrement="0"
      :ifMuted="$store.state.ifMuted" @end-audio="play = false" />
    <template v-if="!dataRoom.ifCheck">
      <h4 class="mt-lg-0 mt-3">לאחר סיום המשימה תוכלו לבדוק כאן את הצופן</h4>
    </template>
    <template v-else>
      <template v-if="!dataRoom.ifResolved">
        <aInput class="mt-lg-0 mt-3" v-model="code" placeholder="בדיקת צופן" :required="false" />
        <div class="g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3" @click="checkCode">בדיקה</div>
      </template>
      <template v-else>
        <h4 class="mt-lg-0 mt-3">הצופן של חדר מס' {{dataRoom.id}} הוא <span
            class="main-color fw-bolder h3">{{dataRoom.code}}</span></h4>
      </template>
    </template>
  </div>
</template>

<script>
  // @ is an alias to /src
  import aInput from '@/components/aInput.vue'
  import autoAudio from '@/components/autoAudio.vue'
  import bg from '@/components/bg.vue'
  import Swal from 'sweetalert2'

  export default {
    name: 'checkCode',
    components: {
      aInput,
      autoAudio,
      bg
    },
    props: {
      dataRoom: Object
    },
    data() {
      return {
        code: "",
        play: false,
        srcAudio: null
      }
    },
    methods: {
      async checkCode() {
        if (+this.code === this.dataRoom.code) {
          this.srcAudio = "../audio/final-room.mp3";
          this.play = true;
          this.$store.commit('completeRoom', this.dataRoom.id)
          await Swal.fire({
            title: 'יפה מאוד!',
            text: "הצלחתם למצוא את הצופן של חדר מס'" + this.dataRoom.id,
            timer: 3000,
            icon: 'success',
            timerProgressBar: true,
          })
          this.$router.push('/mainRoom/')
        } else {
          Swal.fire({
            title: 'קוד שגוי',
            text: 'נסו שוב',
            timer: 3000,
            icon: 'error',
            timerProgressBar: true,
          })
        }
      }
    },
    computed: {
      ifCheck() {
        return this.dataRoom.ifCheck;
      }
    },
    watch: {
      ifCheck: async function (ifCheck) {
        if (ifCheck) {
          this.srcAudio = "../audio/final-task.mp3";
          this.play = true;
          await Swal.fire({
            title: 'סיימתם את המשימה. עכשיו נותר לכם למצוא את הצופן ולבדוק אותו בשדה הטקסט',
            timer: 4000,
            icon: 'success',
            timerProgressBar: true,
          })
          this.$refs.checkCode.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
        }
      }
    }
  }
</script>

<style scoped>
  .wrap-check {
    /* background-image: url('../assets/ass17.png'); */
    min-height: 120px;
  }

  h4 {
    font-weight: 700;
  }

  @media (max-width: 767.98px) {}
</style>
<template>
  <div ref="checkCode" class="w-100 wrap-check img-contain f-right-top position-relative">
    <bg coverOrContain="contain" :img="require('@/assets/ass17.png')" />
    <autoAudio v-if="play" :src="srcAudio" :ifLoop="false" :maxVol="1" :increment="1" :speedOfIncrement="0" :ifMuted="$store.state.ifMuted" @end-audio="play = false" />
    <template v-if="!dataRoom.ifCheck">
      <h4 class="mt-md-0 mt-3">לאחר סיום המשימה תוכל לבדוק כאן את הצופן</h4>
    </template>
    <template v-else>
      <template v-if="!dataRoom.ifResolved">
        <aInput class="mt-md-0 mt-3" v-model="code" placeholder="בדיקת צופן" :required="false" />
        <div class="g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3" @click="checkCode">בדוק</div>
      </template>
      <template v-else>
        <h4 class="mt-md-0 mt-3">הצופן של חדר מס' {{dataRoom.id}} הוא <span
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
      checkCode() {
        this.srcAudio = "../audio/final-room.mp3";
          this.play = true;
        if (+this.code === this.dataRoom.code) {
          Swal.fire({
            title: 'יפה מאוד!',
            text: "הצלחת למצוא את הצופן של חדר מס'" + this.dataRoom.id,
            timer: 900,
            icon: 'success',
          })
          
          this.$store.commit('completeRoom', this.dataRoom.id)
          setTimeout(() => {
            this.$router.push('/mainRoom/')
          }, 3000)
        } else {
          Swal.fire({
            title: 'קוד שגוי',
            text: 'נסה שוב',
            timer: 3000,
            icon: 'error',
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
      ifCheck: function (ifCheck) {
        if (ifCheck) {
          this.srcAudio = "../audio/final-task.mp3";
          this.play = true;
          this.$refs.checkCode.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
          setTimeout(() => {
            Swal.fire({
              title: 'סיימת את המשימה. עכשיו נותר לך למצוא את הצופן ולבדוק אותו בשדה הטקסט',
              timer: 6000,
              icon: 'success',
            })
          }, 300)
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
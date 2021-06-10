<template>
  <div class="row position-relative">
    <div class="col">
      <div class="row">
        <div class="col f-center">
          <h3 class="text-center">כנסו לחדרים פתרו את החידות ומצאו ספרה שתהיה חלק מהצופן שיפתח את התיבה שבה מוצפנת
            האיגרת</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-4 f-center mt-3 " v-for="room in $store.state.rooms" :key="room.id">
          <router-link :to="room.link" class="door f-center-top img-contain c-p"
            :style="{filter:`drop-shadow(0px 4px 6px black) ${room.ifResolved? 'saturate(1.1)':'saturate(0.6)'}`}">
            <h4 class="mt-lg-4 fw-bold">{{room.text}}</h4>
            <h2 class="w-100 text-center fw-bold main-color" v-if="room.ifResolved">{{room.code}}</h2>
          </router-link>
        </div>
      </div>
      <div class="row mt-5 pb-5">
        <div class="col f-center">
          <div ref="cave" class="cave img-contain">
            <i class="las la-arrow-down arrow-down" v-if="ifAllResolved"></i>
            <img class="fence" :style="{right: fencePosition +'%'}" src="@/assets/ass15.png" alt="">
            <img class="treasure-box c-p" @click="goToCave" src="@/assets/ass16.png" alt="">
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
        fencePosition: 19
      }
    },
    mounted() {
      if (this.ifAllResolved) this.openCave()
    },
    methods: {
      openCave() {
        setTimeout(() => {
          this.$refs.cave.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest"
          });
          this.fencePosition = -35;
        }, 1200)
      },
      goToCave() {
        if (this.ifAllResolved) this.$router.push('/MainRoom/caveRoom')
      }
    },
    computed: {
      rooms() {
        return this.$store.state.rooms
      },
      ifAllResolved() {
        let ifResolved = this.rooms.filter((el) => {
          return !el.ifResolved
        })
        return ifResolved.length ? false : true
      }
    }
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
    background-image: url('../../assets/ass18.png');
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
    width: 55%;
    z-index: 1;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.747));
    transition: 6s;
  }

  .treasure-box {
    position: absolute;
    top: 46%;
    right: 33%;
    width: 24%;
    z-index: 0;
  }

  .arrow-down {
    position: absolute;
    top: 11%;
    right: 42%;
    font-size: 78px;
    color: var(--main-color);
    text-shadow: 1px 1px 9px black;
    z-index: 0;
    animation: arrow 2s infinite;
  }

  @keyframes arrow {
    0% {
      top: 0%;
    }

    50% {
      top: 11%;
    }

     100% {
      top: 0%;
    }
  }



  @media (max-width: 991.98px) {
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

    .arrow-down {
    font-size: 43px;
  }
  }
</style>
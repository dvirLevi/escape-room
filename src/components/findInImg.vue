<template>
  <div class="row">
    <div class="col f-center">
      <div class="w-100 find-in position-relative">
        <img class="w-100 border-r c-p" src="@/assets/ass13.jpg" alt="">
        <div class="circle" v-for="(circle, index) in circles" :key="circle.id" @click="select(index)"
          :style="{top: circle.top + '%', left: circle.left + '%', border: `solid 2px ${circle.ifSelect? 'var(--main-color)': '#00000000' }`}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'findInImg',
    data() {
      return {
        circles: [{
            top: 34,
            left: 38,
            ifSelect: false,
            id: 1
          },
          {
            top: 39,
            left: 2,
            ifSelect: false,
            id: 1
          },
          {
            top: 40,
            left: 55,
            ifSelect: false,
            id: 1
          },
          {
            top: 30,
            left: 11,
            ifSelect: false,
            id: 1
          },
        ]
      }
    },
    methods: {
      select(index) {
        this.circles[index].ifSelect = true;
        if(this.ifEndGame) {
          this.$emit('end-game');  
        }
      }
    },
    computed: {
      ifEndGame() {
        let check = true;
        for (let i in this.circles) {
          if (this.circles[i].ifSelect) {
            check = true;
          } else {
            check = false;
            break;
          }
        }
        return check;
      }
    },



  }
</script>

<style scoped>
  .find-in {
    /* background-image: url("../assets/ass13.jpg"); */
    /* padding-top: 70%; */
  }

  .circle {
    position: absolute;
    width: 50px;
    height: 50px;
    border: solid 2px var(--main-color);
    border-radius: 100%;
  }





  @media (max-width: 767.98px) {
    .circle {
      width: 20px;
      height: 20px;
    }
  }
</style>
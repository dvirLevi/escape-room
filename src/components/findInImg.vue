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
      circles() {
        return this.$store.state.GfindInImg.circles;
      },
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

  .circle {
    position: absolute;
    width: 50px;
    height: 50px;
    border: solid 2px var(--main-color);
    border-radius: 100%;
  }





  @media (max-width: 991.98px) {
    .circle {
      width: 20px;
      height: 20px;
    }
  }
</style>
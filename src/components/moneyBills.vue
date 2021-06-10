<template>
  <div class="row">
    <div class="col f-center">
      <div class="f-center-top w-100">
        <div class="w-75">
          <h5>בערימה נמצאים גם שטרות מזוייפים לכן עליכם למיין רק את השטרות האמיתיים שנראים כמו השטר משמאל. במידה וייבחר שטר
            שגוי הערימה תתערבב מחדש.</h5>
        </div>
        <div class="w-25">
          <img class="w-100" src="@/assets/moneyBills/ass1.jpg">
        </div>
      </div>
      <div class="f-center w-100 mt-3 mb-lg-5 mb-0 pe-lg-5">
        <img class="select-bill" v-for="bill in selectBills" :key="bill.id" :src="bill.img" draggable="false">
      </div>
      <div class="f-center w-100 mt-5 mb-5 pb-lg-5 pb-0">
        <img class="shuffle-bill" v-for="bill in shuffleBills" :key="bill.id" :src="bill.img"
          :style="{transform: `rotate(${getRandNum(0, 360)}deg)`}" @click="findBills(bill.id, bill.ifCorrect)"
          draggable="false">
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import part from '@/components/puzzle/part.vue'
  import shuffle from '../helpers/shuffle'
  import getRandNum from '../helpers/getRandNum'

  export default {
    name: 'moneyBills',
    components: {
      // part
    },
    props: {
      widthParts: {
        default: 20,
        type: Number
      },
      ifFreeze: Boolean
    },
    data() {
      return {

      }
    },
    methods: {
      getRandNum(min, max) {
        return getRandNum(min, max)
      },
      findBills(id, ifCorrect) {
        if (!this.ifFreeze) {
          if (ifCorrect) {
            this.bills.forEach((el) => {
              if (el.id === id) {
                el.ifSelect = true;
              }
            })
          } else {
            this.bills.forEach((el) => {
              el.ifSelect = false;
            })
          }

          if (this.ifEndGame) {
            this.$emit('end-game');
          }
        }

      },
      // removeBills(id) {
      //   this.bills.forEach((el) => {
      //     if (el.id === id) {
      //       el.ifSelect = false;
      //     }
      //   })
      //   if (this.ifEndGame) {
      //     this.$emit('end-game');
      //   }
      // }
    },
    computed: {
      bills() {
        return this.$store.state.GmoneyBills.bills;
      },
      shuffleBills() {
        return shuffle(this.bills.filter((el) => {
          return !el.ifSelect
        }))
      },
      selectBills() {
        return this.bills.filter((el) => {
          return el.ifSelect
        })
      },
      ifEndGame() {
        if (this.selectBills.length === 15) {
          return true;
        }
        return false;
      }
    }

  }
</script>

<style scoped>
  .puzzle {
    width: 100%;
  }

  /* .wrap-bill {
    width: 10%;
  } */

  .shuffle-bill {
    width: 20%;
    margin-left: -5%;
    margin-right: -5%;
  }


  .shuffle-bill:hover {
    filter: brightness(1.3)
  }

  .select-bill {
    width: 20%;
    margin-left: -5%;
    margin-right: -5%;
  }



  @media (max-width: 991.98px) {
    .shuffle-bill {
      width: 28%;
      /* margin-left: -7.5%; */
      margin-left: -3.75%;
      margin-right: -3.75%;
    }

    .select-bill {
      width: 28%;
      /* margin-left: -7.5%; */
      margin-left: -3.75%;
      margin-right: -3.75%;
    }
  }
</style>
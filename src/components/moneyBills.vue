<template>
  <div class="row">
    <div class="col f-center">
      <div class="f-center w-100 mt-3 mb-md-5 mb-0 pe-md-5">
        <img class="select-bill" v-for="bill in selectBills" :key="bill.id" :src="bill.img"
          @click="removeBills(bill.id)" draggable="false">
      </div>
      <div class="f-center w-100 mt-5 mb-5 pb-md-5 pb-0">
        <img class="shuffle-bill" v-for="bill in shuffleBills" :key="bill.id" :src="bill.img"
          :style="{transform: `rotate(${getRandNum(0, 360)}deg)`}" @click="findBills(bill.id)" draggable="false">
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
      ifShuffle: Boolean
    },
    data() {
      return {
        bills: [{
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 1
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 2
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 3
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 4
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 5
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 6
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 7
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 8
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 9
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 10
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 11
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 12
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 13
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 14
          },
          {
            img: require('@/assets/moneyBills/ass1.jpg'),
            ifSelect: false,
            ifCorrect: true,
            id: 15
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 16
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 17
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 18
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 19
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 20
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 21
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 22
          },
          {
            img: require('@/assets/moneyBills/ass2.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 23
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 24
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 25
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 26
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 27
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 28
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 29
          },
          {
            img: require('@/assets/moneyBills/ass3.jpg'),
            ifSelect: false,
            ifCorrect: false,
            id: 30
          }
        ]
      }
    },
    methods: {
      getRandNum(min, max) {
        return getRandNum(min, max)
      },
      findBills(id) {
        this.bills.forEach((el) => {
          if (el.id === id) {
            el.ifSelect = true;
          }
        })
        if(this.ifEndGame) {
          this.$emit('end-game');  
        }
      },
      removeBills(id) {
        this.bills.forEach((el) => {
          if (el.id === id) {
            el.ifSelect = false;
          }
        })
        if(this.ifEndGame) {
          this.$emit('end-game');  
        }
      }
    },
    computed: {
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
        let check = true;
        for (let i in this.selectBills) {
          if (this.selectBills[i].ifCorrect && this.selectBills.length === 15) {
           check = true;
          } else {
            check = false;
            break;
          }
        }
        return check;
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



  @media (max-width: 767.98px) {
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
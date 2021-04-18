<template>
  <div class="row">
    <div class="col">
      <div class="row">
        <div class="col-6">
          <dragDrop itemsClass="w-100 f-center sentence p-2 mt-2" :items="redSentences" v-slot:default="slotProps">
            <div class="w-75 border-start">
              <h6>{{slotProps.item.text}}</h6>
            </div>
            <div class="w-25 f-center-around">
              <i :class="slotProps.item.arrow" class="las h4 m-0"></i>
              <h3 class="m-0">{{slotProps.item.num}}</h3>
              <div class="square" :style="{backgroundColor: slotProps.item.colorSquare}">
              </div>
            </div>
          </dragDrop>
        </div>
        <div class="col-6">
          <dragDrop itemsClass="w-100 f-center sentence p-2 mt-2" :items="greenSentences" v-slot:default="slotProps">
            <div class="w-75 border-start">
              <h6>{{slotProps.item.text}}</h6>
            </div>
            <div class="w-25 f-center-around">
              <i :class="slotProps.item.arrow" class="las h4 m-0"></i>
              <h3 class="m-0">{{slotProps.item.num}}</h3>
              <div class="square" :style="{backgroundColor: slotProps.item.colorSquare}">
              </div>
            </div>
          </dragDrop>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col">
          <div class="w-100 f-center">
            <div class="w-50 f-center">
              <div class="square-table" v-for="item in redSquare" :key="item.id"
                @click="item.id !== 4 && !ifFreeze? item.ifSelect = !item.ifSelect: null"
                :style="{backgroundColor: item.ifSelect? 'red':'#fff'}">

              </div>
            </div>
            <div class="w-50 f-center">
              <div class="square-table" v-for="item in greenSquare" :key="item"
                @click="item.id !== 4 && !ifFreeze? item.ifSelect = !item.ifSelect: null"
                :style="{backgroundColor: item.ifSelect? 'green':'#fff'}">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import dragDrop from '@/components/dragDrop.vue'
  // import shuffle from '../helpers/shuffle'

  export default {
    name: 'arrangeSentences',
    components: {
      dragDrop
    },
    props: {
       ifFreeze: Boolean
    },
    data() {
      return {
       
      }
    },
    created() {
      this.$store.commit('shuffle');
    },
    computed: {
      redSentences() {
        return this.$store.state.GarrangeSentences.redSentences;
      },
      greenSentences() {
        return this.$store.state.GarrangeSentences.greenSentences;
      },
      redSquare() {
        return this.$store.state.GarrangeSentences.redSquare;
      },
      greenSquare() {
        return this.$store.state.GarrangeSentences.greenSquare;
      },
      ifEndGame() {
        let check = true;
        for (let i in this.redSquare) {
          if (this.redSquare[i].ifCorrect && !this.redSquare[i].ifSelect || !this.redSquare[i].ifCorrect && this
            .redSquare[i].ifSelect) {
            check = false;
          }
        }
        for (let i in this.greenSquare) {
          if (this.greenSquare[i].ifCorrect && !this.greenSquare[i].ifSelect || !this.greenSquare[i].ifCorrect && this
            .greenSquare[i].ifSelect) {
            check = false;
          }
        }
        return check;
      }
    },
    watch: {
      ifEndGame: function (ifEndGame) {
        if (ifEndGame) {
          this.$emit('end-game');
        }
      }
    }
  }
</script>

<style>
  .sentence {
    border: solid 2px var(--main-color);
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 2px 3px 10px #3d3d3d;
  }

  .sentence h6 {
    font-size: 13px;
  }

  .square {
    width: 20px;
    height: 20px;
    background-color: #000;
  }

  .square-table {
    width: 20%;
    padding-top: 20%;
    background-color: #000;
    border: solid 1px rgb(0, 0, 0);
  }

  @media (max-width: 767.98px) {
    .sentence h6 {
      font-size: 10px;
    }
  }
</style>
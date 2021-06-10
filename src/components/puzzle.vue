<template>
  <div class="row">
    <div class="col f-center">
      <div class="f-center puzzle p-1 border-r">
        <dragDrop @finish="endGame" itemsClass="wrap-part" :itemsStyle="{width: widthParts + '%'}" :items="parts"
          v-slot:default="slotProps" :freeze="ifFreeze">
          <div class="part img-contain" :style="{backgroundImage: `url(${slotProps.item.img})`}">
          </div>
        </dragDrop>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import part from '@/components/puzzle/part.vue'
  // import Gpuzzle from '../helpers/Gpuzzle'
  import dragDrop from '@/components/dragDrop.vue'

  export default {
    name: 'puzzle',
    components: {
      // part,
      dragDrop
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
        // parts: [
      
        // ]
      }
    },
    created() {
      this.$store.commit('shuffle');
    },
    methods: {
      endGame() {
        if (this.ifEndGame) {
          this.$emit('end-game');
        }
      },
    },
    computed: {
      parts() {
        return this.$store.state.Gpuzzle.parts;
      },
      ifEndGame() {
        let n = 1;
        let check = true;
        for (let i in this.parts) {
          if (this.parts[i].id === n) {
            n++
          } else {
            check = false;
          }
        }
        return check;
      }
    }

  }
</script>

<style>
  .puzzle {
    width: 100%;
    border: solid 3px var(--main-color);

  }

  .wrap-part {
    padding: 1px;
  }

  .part {
    width: 100%;
    padding-top: 100%;
    cursor: grab;
  }



  @media (max-width: 991.98px) {
    /* .puzzle {
      width: 100%;
    } */
  }
</style>
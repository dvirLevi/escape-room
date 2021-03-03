<template>
  <div class="row">
    <div class="col f-center">
      <div class="f-center puzzle p-1 border-r">
        <div class="wrap-part" v-for="part in parts" :key="part.id" :style="{width: widthParts + '%'}">
          <part :part="part" @drag-el="dragID = $event" @drop-el="endDrag" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import part from '@/components/puzzle/part.vue'
  import shuffle from '../helpers/shuffle'
  export default {
    name: 'puzzle',
    components: {
      part
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
        dragID: 0,
        // dropID: 0,
        parts: [{
            img: require('@/assets/puzzle/ass1.jpg'),
            id: 1
          },
          {
            img: require('@/assets/puzzle/ass2.jpg'),
            id: 2
          },
          {
            img: require('@/assets/puzzle/ass3.jpg'),
            id: 3
          },
          {
            img: require('@/assets/puzzle/ass4.jpg'),
            id: 4
          },
          {
            img: require('@/assets/puzzle/ass5.jpg'),
            id: 5
          },
          {
            img: require('@/assets/puzzle/ass6.jpg'),
            id: 6
          },
          {
            img: require('@/assets/puzzle/ass7.jpg'),
            id: 7
          },
          {
            img: require('@/assets/puzzle/ass8.jpg'),
            id: 8
          },
          {
            img: require('@/assets/puzzle/ass9.jpg'),
            id: 9
          },
          {
            img: require('@/assets/puzzle/ass10.jpg'),
            id: 10
          },
          {
            img: require('@/assets/puzzle/ass11.jpg'),
            id: 11
          },
          {
            img: require('@/assets/puzzle/ass12.jpg'),
            id: 12
          },
          {
            img: require('@/assets/puzzle/ass13.jpg'),
            id: 13
          },
          {
            img: require('@/assets/puzzle/ass14.jpg'),
            id: 14
          },
          {
            img: require('@/assets/puzzle/ass15.jpg'),
            id: 15
          },
        ]
      }
    },
    mounted() {
      if (!this.ifShuffle) {
        this.parts = shuffle(this.parts);
      }
    },
    methods: {
      endDrag(e) {
        let dragEl = this.dragID;
        let dropEl = e;
        this.replaseObjElements(dragEl, dropEl, this.parts);
        if(this.ifEndGame) {
          this.$emit('end-game');  
        }
      },
      replaseObjElements(id1, id2, arr) {
        let index1 = arr.findIndex((el) => {
          return el.id === id1;
        })
        let index2 = arr.findIndex((el) => {
          return el.id === id2;
        })
        let el1 = arr[index1];
        let el2 = arr[index2];
        arr[index1] = el2;
        arr[index2] = el1;
      }
    },
    computed: {
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

<style scoped>
  .puzzle {
    width: 100%;
    border: solid 3px var(--main-color);

  }

  .wrap-part {
    padding: 1px;
  }



  @media (max-width: 767.98px) {
    /* .puzzle {
      width: 100%;
    } */
  }
</style>
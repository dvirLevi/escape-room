<template>
  <div class="row">
    <div class="col f-center">
      <div class="f-center w-100">
        <div class="wrap-part" v-for="part in parts" :key="part.id" :style="{width: widthParts + '%'}">
          <div class="box-part">
            <part :part="part" @active-pos="activePos = $event" @drop-el="endDrag" :activePos="activePos" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import part from '@/components/puzzle/part.vue'

  export default {
    name: 'puzzle',
    components: {
      part
    },
    props: {
      widthParts: {
        default: 20,
        type: Number
      }
    },
    data() {
      return {
        activePos: {},
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
    methods: {
      endDrag(e) {
        console.log(e.id, this.activePos.id)
      }
    }

  }
</script>

<style scoped>
  .wrap-part {
    /* width: 20%; */
    padding: 2px;
    /* position: relative; */
  }

  .box-part {
    width: 100%;
    padding-top: 100%;
    position: relative;
  }

  @media (max-width: 767.98px) {
    .grid {
      width: 100%;
    }
  }
</style>
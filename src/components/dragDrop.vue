<template>
  <dragDropItem :class="itemsClass" :placeDragClass="placeDragClass" :dragClass="dragClass" :style="itemsStyle" v-for="item in items" :item="item" :key="item.id" :id="item.id" :elDrop="elDrop" @pass-drag-index="dragId = $event"
    @end-drop="endDrop" @drop-momile="elDrop = $event" @if-drop="ifDrop = $event" :ifDrop="ifDrop" :freeze="freeze" @finish="$emit('finish', items)" >
    <slot :item="item"></slot>
  </dragDropItem>
</template>

<script>
  // @ is an alias to /src
  import dragDropItem from '@/components/dragDropItem.vue'


  export default {
    name: 'dragDrop',
    components: {
      dragDropItem
    },
    props: {
      items: Array,
      itemsClass: String,
      itemsStyle: Object,
        placeDragClass: {
        default: 'p-drag-el',
        type: String
      },
      dragClass: {
        default: 'drag-el',
        type: String
      },
      freeze: {
        default: false,
        type: Boolean
      }
    },
    emits: ['finish'],
    data() {
      return {
        // items: [],
        dragId: null,
        elDrop: null,
        ifDrop: true
      }
    },
    // mounted() {
    //   this.items = JSON.parse(JSON.stringify(this.arrayItems))
    // },
    methods: {
      endDrop(dropId) {
        const replaseObjElements = (dragId, dropId, arr) => {
          let index1 = arr.findIndex((el) => {
            return el.id === dragId;
          })
          let index2 = arr.findIndex((el) => {
            return el.id === dropId;
          })
          let dragEl = arr[index1];
          let dropEl = arr[index2];
          arr[index1] = dropEl;
          arr[index2] = dragEl;
        }
        replaseObjElements(this.dragId, dropId, this.items);
        // this.$emit('end-drop', this.items)
      },

    },
  }
</script>

<style scoped>
  @media (max-width: 991.98px) {}
</style>
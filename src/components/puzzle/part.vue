<template>
  <div ref="part" class="part img-contain" draggable="true" @dragstart="drag" @dragover.prevent="" @drop="drop"
    :style="{backgroundImage: `url(${part.img})`}">
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'part',
    props: {
      part: Object,
    },
    data() {
      return {

      }
    },
    methods: {
      drag() {
        this.$emit('drag-el', this.part.id)
      },
      drop() {
        this.$emit('drop-el', this.part.id)
      }
    },
  }
</script>

<style scoped>
  .part {
    width: 100%;
    padding-top: 100%;
    cursor: grab;
  }

  @media (max-width: 767.98px) {}
</style>
<template>
  <div class="row mt-3">
    <div class="col">
      <puzzle />
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import puzzle from '@/components/puzzle.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      puzzle
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>
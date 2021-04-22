<template>
  <div id="container" class="container-fluid position-relative">
    <toolBar />
     <bg :img="require('./assets/ass.jpg')" />
    <!-- <div class="container p-0"> -->
      <timer v-if="name" />
      <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'
  import bg from '@/components/bg.vue'
   import timer from '@/components/timer.vue'

  export default {
    name: 'App',
    components: {
      toolBar,
      bg,
      timer
    },
    computed: {
      name() {
        return this.$store.state.name
      }
    }
  }
</script>

<style scoped>
/* .container-fluid {
background-image: url('./assets/ass.jpg');
} */
</style>
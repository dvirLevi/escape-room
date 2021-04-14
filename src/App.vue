<template>
  <div id="container" class="container-fluid position-relative">
    <toolBar />
     <bg :img="require('./assets/ass.jpg')" />
    <!-- <div class="container p-0"> -->
      <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'
  import bg from '@/components/bg.vue'

  export default {
    name: 'App',
    components: {
      toolBar,
      bg
    }
  }
</script>

<style scoped>
/* .container-fluid {
background-image: url('./assets/ass.jpg');
} */
</style>
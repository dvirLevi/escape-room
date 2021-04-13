<template>
  <div id="container" class="container-fluid">
    <toolBar />
    <!-- <div class="container p-0"> -->
      <router-view />
    <!-- </div> -->
  </div>
</template>

<script>
  // @ is an alias to /src
  import toolBar from '@/components/toolBar.vue'

  export default {
    name: 'App',
    components: {
      toolBar
    }
  }
</script>

<style scoped>
/* .container-fluid {
background-image: url('./assets/ass.jpg');
} */
</style>
<template>
  <div id="container" class="container-fluid position-relative">
    <toolBar />
     <bg :img="require('./assets/ass.jpg')" />
    <!-- <div class="container p-0"> -->
      <timer v-if="name" />
      <router-view />
    <!-- </div> -->
      <footer class="row mt-3">
        <div class="col f-center">
          <h4 class="m-2 fw-light"><a href="https://www.appslife.co.il/" target="_blanc">נבנה ופותח בAppsLife</a></h4>
        </div>
      </footer>
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
footer {
  background-color: var(--main-text-color);
  color: #fff;
}
/* .container-fluid {
background-image: url('./assets/ass.jpg');
} */
</style>
<template>
  <nav class="row row-nav p-e-n">
    <div class="col">
      <div class="container">
        <div class="row pt-1 pb-1">
          <div class="col p-0 f-center-between">
            <router-link tag="div" to="/" class="logo p-e-p">
              <img class="w-100" src="../assets/logo.png" alt="">
            </router-link>

            <buttonsPlace class="p-e-p" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  // @ is an alias to /src
  import buttonsPlace from '@/components/buttonsPlace.vue'

  export default {
    name: "toolBar",
    components: {
      buttonsPlace
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .row-nav {
    /* background-color: #ffffff; */
    position: sticky;
    top: 0;
    z-index: 1000;
    /* box-shadow: 1px 4px 20px #0000001f; */
  }

  .logo {
    width: 160px;
    background-color: rgba(255, 255, 255, 0.712);
    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
      .logo {
    width: 100px;
  }
  }
</style>
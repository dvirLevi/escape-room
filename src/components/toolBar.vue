<template>
  <nav class="row row-nav">
    <div class="col">
      <div class="container">
        <div class="row pt-1 pb-1">
          <div class="col p-0 f-center-between">
            <router-link tag="div" to="/" class="logo">
              <img class="w-100" src="../assets/logo.png" alt="">
            </router-link>

            <socialIcons />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  // @ is an alias to /src
  import socialIcons from '@/components/socialIcons.vue'

  export default {
    name: "toolBar",
    components: {
      socialIcons
    },
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .row-nav {
    background-color: #ffffff;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 1px 4px 20px #0000001f;
  }

  .logo {
    width: 160px;
  }

  @media (max-width: 767.98px) {
      .logo {
    width: 110px;
  }
  }
</style>
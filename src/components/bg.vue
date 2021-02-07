<template>
  <div class="bg img-cover" :style="{backgroundImage:`url(${img})`}">

  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'bg',
props:{
  img: String
}
  }
</script>

<style scoped>
  .bg {
    width: 100%;
    height: 100%;
    /* background-image: url('../assets/ass.jpg'); */
    position: absolute;
    top: 0;
    right: 0;
    z-index: -2;
    opacity: .4;
  }

  @media (max-width: 767.98px) {}
</style>
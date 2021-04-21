<template>
  <div class="bg" :class="coverOrContain === 'cover'? 'img-cover': 'img-contain'" :style="{backgroundImage:`url(${img})`, opacity: opacity}">

  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'bg',
    props: {
      img: String,
      coverOrContain: {
        default: 'cover',
        type: String,
      },
      opacity: {
        default: '.4',
        type: String,
      }
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
  }

  .img-cover {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
}

.img-contain {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50%;
}

  @media (max-width: 767.98px) {}
</style>
<template>
  <div class="buttons-place f-center mt-2 me-2">
    <fullScreen />
    <muteSound />
  </div>
</template>

<script>
  // @ is an alias to /src
  // import aInput from '@/components/aInput.vue'
  import fullScreen from '@/components/fullScreen.vue'
  import muteSound from '@/components/muteSound.vue'

  export default {
    name: 'buttonsPlace',
    components: {
      fullScreen,
      muteSound
    },
  }
</script>

<style scoped>
/* .buttons-place {
  position: absolute;
  top: 0;
  right: 0;
} */
  @media (max-width: 767.98px) {}
</style>
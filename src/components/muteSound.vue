<template>
  <wrapIcons class="wrap-icon" @click="muteSound">
    <span class="material-icons-outlined" v-if="!this.$store.state.ifMuted">
      volume_off
    </span>
    <span class="material-icons-outlined" v-else>
      volume_up
    </span>
  </wrapIcons>
</template>

<script>
  import wrapIcons from '@/components/wrapIcons.vue'
  export default {
    name: 'muteSound',
    components: {
      wrapIcons
    },
    data() {
      return {
        isMuted: false
      }
    },
    methods: {
      muteSound() {
        this.$store.state.ifMuted = !this.$store.state.ifMuted;
      }
    }
  }
</script>

<style>
  .wrap-icon {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: var(--main-color);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 767.98px) {}
</style>
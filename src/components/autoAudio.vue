<template>
  <audio ref="audio" loop :src="src"></audio>
</template>

<script>
  export default {
    name: 'autoAudio',
    props: {
      src: String,
      maxVol: {
        default: 1,
        type: Number
      },
      speedOfIncrement: {
        default: 500,
        type: Number
      },
      increment: {
        default: 0.1,
        type: Number
      },
    },
    data() {
      return {
        volume: 0,
        setInterval: null
      }
    },
    mounted() {
      this.$refs.audio.volume = this.volume;
      this.$refs.audio.play();
      this.incrementVolume()
    },
    methods: {
      incrementVolume() {
        this.setInterval = setInterval(() => {
          if (this.volume > this.maxVol - this.increment) {
            clearInterval(this.setInterval);
          } else {
            this.volume += this.increment;
            this.$refs.audio.volume = this.volume;
          }
        }, 500)
      }
    }

  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>
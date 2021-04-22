<template>
  <audio ref="audio" :loop="ifLoop" :src="src" @ended="$emit('end-audio')"></audio>
</template>

<script>
  export default {
    name: 'autoAudio',
    props: {
      src: String,
      maxVol: {
        default: 0.6,
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
      ifMuted: Boolean,
      ifLoop: {
        default: true,
        type: Boolean
      }
    },
    data() {
      return {
        volume: 0,
        setInterval: null
      }
    },
    mounted() {
      if (!this.ifMuted) {
        this.$refs.audio.volume = this.volume;
        this.$refs.audio.play();
        this.incrementVolume()
      }
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
        }, this.speedOfIncrement)
      }
    },
    watch: {
      ifMuted: function () {
        this.$refs.audio.muted = this.ifMuted;
      }
    },
    unmounted() {
      clearInterval(this.setInterval);
    }

  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>
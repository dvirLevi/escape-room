<template>
  <div ref="part" class="part img-contain" @mousedown="drag" @mousemove="drag" @mouseup="drop"
    :style="{left: posLeft + 'px', top: posTop + 'px', zIndex: zindex, backgroundImage: `url(${part.img})`}">
    <!-- {{i}} -->
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'part',
    props: {
      part: Object,
      activePos: Object,
    },
    data() {
      return {
        posW: 0,
        posH: 0,
        posLeft: 0,
        posTop: 0,
        ifDrag: false,
        zindex: "0",
        location: {

        }
      }
    },
    mounted() {
      setTimeout(() => {
        let rect = this.$refs.part.getBoundingClientRect();
        this.posW = rect.left + rect.width / 2;
        this.posH = rect.top + rect.height / 2;
      }, 100)
    },
    methods: {
      drag(e) {
        // console.log(e)
        // type: "mousemove"
        if (e.type === "mousedown") {
          this.ifDrag = true;
          this.zindex = "2"
        }
        if (this.ifDrag) {
          let location = e;
          this.posLeft = location.pageX - this.posW;
          this.posTop = location.pageY - this.posH;
        }
      },
      drop() {
        if (this.ifDrag) {
          this.$emit('active-pos', {
            posLeft: this.posLeft + this.posW,
            posTop: this.posTop + this.posH,
            id: this.part.id
          })
        }
      }
    },
    watch: {
      activePos: function () {
        // console.log(this.activePos);
        // console.log(Math.abs(this.activePos.posLeft - this.posW), Math.abs(this.activePos.posTop - this.posH))
        if (Math.abs(this.activePos.posLeft - this.posW) < 100 && Math.abs(this.activePos.posTop - this.posH) < 100) {
          console.log(this.part.id);
           this.$emit('drop-el', {id: this.part.id})
        }
      }
    }

  }
</script>

<style scoped>
  .part {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 767.98px) {}
</style>
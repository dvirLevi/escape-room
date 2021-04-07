<template>
  <div :id="'drag' + id" :class="{'opacity': el_prime}" @mousedown="clone" @mouseup="drop">
    <slot></slot>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'dragDrop',
    props: {
      id: Number
    },
    data() {
      return {
        rect: null,
        el_prime: null
      }
    },
    methods: {
      clone(e) {
        let el = document.getElementById('drag' + this.id);
        this.el_prime = el.cloneNode(true);
        let parantEl = el.parentElement;
        parantEl.appendChild(this.el_prime);
        this.rect = el.getBoundingClientRect()
        this.el_prime.style.position = 'fixed';
        this.el_prime.style.left = e.clientX - this.rect.width / 2 + "px";
        this.el_prime.style.top = e.clientY - this.rect.height / 2 + "px";
        this.el_prime.style.setProperty('width', this.rect.width + "px", 'important');
        this.el_prime.style.setProperty('height', this.rect.height + "px", 'important');
        this.el_prime.style.setProperty('box-shadow', '2px 3px 20px #3d3d3d');
        this.el_prime.style.setProperty('z-index', '1');
        // this.el_prime.style.setProperty('pointer-events', 'visiblefill', 'important')
            // this.el_prime.style.setProperty('visibility', 'visible', 'important')
        this.el_prime.onmousemove = (e) => {
          this.track(e)
        }
        this.el_prime.onmouseup = () => {
          this.el_prime.remove();
          this.el_prime = null;
        }
        this.el_prime.onmouseleave = () => {
          this.el_prime.remove();
          this.el_prime = null;
        }
      },
      track(e) {
        this.el_prime.style.left = e.clientX - this.rect.width / 2 + "px";
        this.el_prime.style.top = e.clientY - this.rect.height / 2 + "px";
      },
      drop() {
        alert()
      }
    },
    computed: {

    },
  }
</script>

<style scoped>
.opacity {
  opacity: 0.5;
}
  @media (max-width: 767.98px) {}
</style>
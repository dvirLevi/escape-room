<template>
  <div :id="'drag' + id" class="drag-drop" :class="el_prime? placeDragClass : ''" @mousedown="clone" @mouseover="drop"
    @touchstart="clone">
    <slot></slot>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'dragDropItem',
    props: {
      id: Number,
      elDrop: String,
      item: Object,
      placeDragClass: {
        default: 'p-drag-el',
        type: String
      },
      dragClass: {
        default: 'drag-el',
        type: String
      },
      ifDrop: Boolean

    },
    data() {
      return {
        rect: null,
        el_prime: null
      }
    },
    methods: {
      clone(e) {
        if (!this.el_prime) {
          const el = document.getElementById('drag' + this.id);
          this.el_prime = el.cloneNode(true);
          const parantEl = el.parentElement;
          parantEl.appendChild(this.el_prime);
          this.rect = el.getBoundingClientRect();
          this.el_prime.id = 'activeDrag';
          this.el_prime.classList.add(this.dragClass);
          this.el_prime.style.position = 'fixed';
          this.el_prime.style.setProperty('width', this.rect.width + "px", 'important');
          this.el_prime.style.setProperty('height', this.rect.height + "px", 'important');
          // this.el_prime.style.setProperty('box-shadow', '2px 3px 20px #3d3d3d');
          this.el_prime.style.setProperty('pointer-events', 'none', 'important');
          this.el_prime.style.setProperty('margin', '0px', 'important');
          this.el_prime.style.left = this.rect.left + "px";
          this.el_prime.style.top = this.rect.top + "px";
          setTimeout(() => {
            this.el_prime.style.setProperty('transition', '.2s');
            this.follow(e);
          }, 3)


          this.$emit('pass-drag-index', this.id)
          const body = document.body;
          if (this.el_prime) {
            const removeEl_prime = () => {
              this.el_prime.ontransitionend = () => {
                if (this.el_prime) {
                  this.el_prime.remove();
                  this.el_prime = null;
                  this.$emit('if-drop', true)
                }
              }
              this.$emit('if-drop', false)
              this.el_prime.style.setProperty('transition', '.2s');
              this.rect = el.getBoundingClientRect();
              this.el_prime.style.left = this.rect.left + "px";
              this.el_prime.style.top = this.rect.top + "px";
              body.onmousemove = null;
              body.onmouseup = null;
              body.ontouchmove = null;
              body.ontouchend = null;
            }

            body.onmousemove = (e) => {
              this.drag(e)
            }
            body.onmouseup = () => {
              removeEl_prime()
            }


            el.addEventListener("touchmove", (e) => {
              e.preventDefault();
            }, {
              passive: false
            });

            body.ontouchmove = (e) => {
              console.log(e)
              this.drag(e);
              this.dropMomile(e)
            }

            body.ontouchend = () => {
              removeEl_prime()
            }
          }
        }
      },
      drag(e) {
        this.el_prime.style.setProperty('transition', 'none');
        this.follow(e)
      },
      drop() {
        const activeDragEl = document.getElementById('activeDrag');
        if (activeDragEl && !this.el_prime && this.ifDrop) {
          this.$emit('end-drop', this.id);
        }
      },
      dropMomile(e) {
        let touch = e.touches[0];
        let checkbox = document.elementFromPoint(touch.clientX, touch.clientY);
        this.$emit('drop-momile', checkbox.id);
      },
      follow(e) {
        if (e.type === 'mousemove' || e.type === 'mousedown') {
          this.el_prime.style.left = e.clientX - this.rect.width / 2 + "px";
          this.el_prime.style.top = e.clientY - this.rect.height / 2 + "px";
        } else if (e.type === 'touchmove' || e.type === 'touchstart') {
          this.el_prime.style.left = e.touches[0].clientX - this.rect.width / 2 + "px";
          this.el_prime.style.top = e.touches[0].clientY - this.rect.height / 2 + "px";
        }
      }
    },
    watch: {
      elDrop: function () {
        if (this.elDrop === 'drag' + this.id) {
          const activeDragEl = document.getElementById('activeDrag');
          if (activeDragEl && !this.el_prime) {
            this.$emit('end-drop', this.id);
          }
        }
      }
    }
  }
</script>

<style>
  .drag-drop * {
    pointer-events: none;
  }

  .p-drag-el {
    opacity: 0.5;
  }

  .drag-el {
    box-shadow: 2px 3px 20px #000000 !important;
  }

  @media (max-width: 767.98px) {}
</style>
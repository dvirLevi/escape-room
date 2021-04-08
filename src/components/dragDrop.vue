<template>
  <div :id="'drag' + id" :class="{'opacity': el_prime}" @mousedown="clone" @mouseover="drop" @touchstart="clone" @touchmove="drop" >
    <slot></slot>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: 'dragDrop',
    props: {
      id: Number,
    },
    data() {
      return {
        rect: null,
        el_prime: null
      }
    },
    methods: {
      clone(e) {
        const el = document.getElementById('drag' + this.id);
        this.el_prime = el.cloneNode(true);
        const parantEl = el.parentElement;
        parantEl.appendChild(this.el_prime);
        this.rect = el.getBoundingClientRect()
        this.el_prime.id = 'activeDrag';
        this.el_prime.style.position = 'fixed';
        this.el_prime.style.left = e.clientX - this.rect.width / 2 + "px";
        this.el_prime.style.top = e.clientY - this.rect.height / 2 + "px";
        this.el_prime.style.setProperty('width', this.rect.width + "px", 'important');
        this.el_prime.style.setProperty('height', this.rect.height + "px", 'important');
        this.el_prime.style.setProperty('box-shadow', '2px 3px 20px #3d3d3d');
        this.el_prime.style.setProperty('pointer-events', 'none', 'important');
        this.$emit('pass-drag-index', this.id)
        const body = document.body;
        if (this.el_prime) {
          body.onmousemove = (e) => {
            this.drag(e)
          }
          body.onmouseup = () => {
            this.el_prime.remove();
            this.el_prime = null;
            body.onmousemove = null;
          }

          body.ontouchmove = (e) => {
            // e.preventDefault()
            e.stopPropagation()
            this.drag(e)
          }

          body.ontouchend = (e) => {
            // e.preventDefault()
            e.stopPropagation()
            this.el_prime.remove();
            this.el_prime = null;
            body.onmousemove = null;
          }
        }
      },
      drag(e) {
        this.el_prime.style.left = e.clientX - this.rect.width / 2 + "px";
        this.el_prime.style.top = e.clientY - this.rect.height / 2 + "px";
      },
      drop() {
        const activeDragEl = document.getElementById('activeDrag');
        if (activeDragEl && !this.el_prime) {
          this.$emit('end-drop', this.id)
        }
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


in parant of <dragDrop /> component

<dragDrop class="w-100 f-center sentence p-2 mt-2" v-for="item in items" :key="item.id" :id="item.id" @pass-drag-index="dragId = $event" @end-drop="endDrop">
        your html content
</dragDrop>


data() {
      return {
        dragId: null,
        items: [{
            content: `asd`,
            id: 1
          },
          {
            content: `asd`,
            id: 2
          },
          {
            content: `asd`,
            id: 3
          },
       
        ]
      }
    },
    methods: {
      endDrop(dropId) {
        const replaseObjElements = (dragId, dropId, arr)=> {
        let index1 = arr.findIndex((el) => {
          return el.id === dragId;
        })
        let index2 = arr.findIndex((el) => {
          return el.id === dropId;
        })
        let dragEl = arr[index1];
        let dropEl = arr[index2];
        arr[index1] = dropEl;
        arr[index2] = dragEl;
      }
      replaseObjElements(this.dragId, dropId, this.items);
      },
    }
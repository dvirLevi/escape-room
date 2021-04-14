<template>
  <wrapIcons v-if="ifMobile">
    <span class="material-icons-outlined" >
      screen_rotation
    </span>
  </wrapIcons>
</template>

<script>
  // @ is an alias to /src
  import wrapIcons from '@/components/wrapIcons.vue'

  export default {
    name: 'fullScreen',
    components: {
      wrapIcons
    },
    data() {
      return {
        isFullScreen: false,
        ifMobile: window.innerWidth > 767 ? false : true,
        ifSetStyle: false,
      }
    },
    methods: {
      fullScreen() {
        if (this.ifMobile) {
          if (!this.isFullScreen) {
            if (!this.ifSetStyle) {
              let styles = `
    :not(:root):fullscreen::backdrop {
      background: rgb(255, 255, 255) !important;
    }
    
    body:fullscreen {
      width: 100%;
      overflow: auto;
    }
`
              let styleSheet = document.createElement("style")
              styleSheet.innerText = styles
              document.head.appendChild(styleSheet)
              this.ifSetStyle = true
            }

            let body = document.body;
            if (document.documentElement.requestFullscreen) {
              body.requestFullscreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
              body.webkitRequestFullScreen();
            }
            screen.orientation.lock("landscape-primary")
            // .then(function () {
            //   _LOCK_BUTTON.style.display = 'none';
            //   _UNLOCK_BUTTON.style.display = 'block';
            // })
            // .catch(function (error) {
            //   alert(error);
            // });
            this.isFullScreen = true;
          } else {
            screen.orientation.lock("portrait-primary")
            this.isFullScreen = false;
          }
        }
      }
    }
  }
</script>

<style>
  
  @media (max-width: 767.98px) {}
</style>
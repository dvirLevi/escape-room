<template>
  <div class="row" @click="fullScreen">
    fghjfghfgh
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'fullScreen',
    components: {},
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
          } else {
            screen.orientation.lock("portrait-primary")
            //  .then(function () {
            //   screen.orientation.unlock()
            // })
            // .catch(function (error) {
            //   alert(error);
            // });
          }
        }
      }
    }
  }
</script>

<style>
  .sentence {
    border: solid 2px var(--main-color);
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 2px 3px 10px #3d3d3d;
  }

  .sentence h6 {
    font-size: 13px;
  }

  .square {
    width: 20px;
    height: 20px;
    background-color: #000;
  }

  .square-table {
    width: 20%;
    padding-top: 20%;
    background-color: #000;
    border: solid 1px rgb(0, 0, 0);
  }

  @media (max-width: 767.98px) {
    .sentence h6 {
      font-size: 10px;
    }
  }
</style>
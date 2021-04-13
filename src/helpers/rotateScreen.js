const rotateScreen = {
  ifSetStyle: false,
  ifMobile: window.innerWidth > 767 ? false : true,
  horizontal() {
    if (this.ifMobile) {
      if (this.ifSetStyle) {
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
    }
  },
  async vertical() {
    if (this.ifMobile) {
      await screen.orientation.lock("portrait-primary")
      screen.orientation.unlock()
    }
  }
}

export default rotateScreen
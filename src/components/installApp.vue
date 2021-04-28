<template>
  <div class="row" v-show="ifShow">
    <div class="col center-all border-top pt-3 mt-3">
      <div ref="addButton" class="butt center-all p-2 c-p ">
        <i class="fas fa-cogs m-2"></i>
        <p class="m-0">להתקנת האפליקציה לחץ כאן</p>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Swal from 'sweetalert2'

  export default {
    name: "installApp",
    components: {

    },
    data() {
      return {
        ifShow: false
      };
    },
    mounted() {
      let deferredPrompt;
      const addBtn = this.$refs.addButton;
      // addBtn.style.display = 'none';
      this.ifShow = false;

      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        // addBtn.style.display = 'block';
        this.ifShow = true;

        addBtn.addEventListener('click', () => {
          // hide our user interface that shows our A2HS button
          // console.log(e)
          // addBtn.style.display = 'none';
          this.ifShow = false;
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              Swal.fire({
                type: 'success',
                title: 'יופי',
                text: 'האפליקציה הותקנה בהצלחה!',
                timer: 1500
              });
            } else {
              Swal.fire({
                type: 'error',
                title: 'אופס...',
                text: 'ההתקנה נכשלה',
                timer: 1500
              });
            }
            deferredPrompt = null;
          });
        });
      });
    },
    computed: {

    }
  };
</script>

<style scoped>
  .butt {
    background-color: #ff6868;
    border-radius: 5px;
    color: #fff;
    width: 315px;
    font-size: 20px;
    font-weight: 100;
    /* margin-top: 2px; */
  }


  @media (max-width: 767.98px) {}
</style>
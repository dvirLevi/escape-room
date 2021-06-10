<template>
  <div class="f-center social-icons">
    <a href="https://chat.whatsapp.com/HkqY05oZUDOJxV81cUlUwm">
      <i class="lab la-whatsapp"></i>
    </a>
    <a href="https://www.facebook.com/Mitkonenet99/" target="_blanc">
      <i class="lab la-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com/mitkonenet/">
      <i class="lab la-instagram"></i>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'socialIcons',



  }
</script>

<style scoped>
  .social-icons i {
    margin: 10px;
    cursor: pointer;
  }

  .social-icons .la-instagram {
    font-size: 35px;
  }

  .social-icons .la-facebook-f {
    font-size: 25px;
  }

  .social-icons .la-whatsapp {
    font-size: 33px;
  }



  @media (max-width: 991.98px) {
    .social-icons i {
      margin: 5px;
      /* font-size: 21px; */
    }
  }
</style>
<template>
  <div class="wrap-icon">
    <slot></slot>
  </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'wrapIcons',
    
  }
</script>

<style>
  .wrap-icon {
    margin-left: 3px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: var(--main-color);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
  }

  @media (max-width: 991.98px) {}
</style>
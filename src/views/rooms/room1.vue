<template>
  <div class="row mt-3">
    <div class="col">
      <div class="row">
        <div class="col-md-2 f-center-right main-color">
          <router-link to="/MainRoom">
            <h5><i class="las la-angle-double-right"></i> חזרה לחדר הראשי</h5>
          </router-link>
        </div>
        <div class="col-md-10">
          <h3>סדרו את המפה שתנחה את השליח מתימן לספרד</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-2 f-center-right">
          <!-- <router-link to="/MainRoom"><h5><i class="las la-angle-double-right"></i> חזרה לחדר הראשי</h5></router-link> -->
        </div>
        <div class="col-md-10">
          <puzzle />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import puzzle from '@/components/puzzle.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      puzzle
    },
    data() {
      return {

      }
    },
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>
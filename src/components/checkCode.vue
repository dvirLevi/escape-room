<template>
  <div class="w-100 f-center-right">
    <aInput class="mt-4" v-model="code" placeholder="בדיקת קוד" />
    <div class="g-butt bg-gradient mt-3 h4 p-2 ps-4 pe-4" @click="checkCode">בדוק</div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import aInput from '@/components/aInput.vue'
  import Swal from 'sweetalert2'

  export default {
    name: 'checkCode',
    components: {
      aInput
    },
    props: {
      dataRoom: Object
    },
    data() {
      return {
        code: ""
      }
    },
    methods: {
      checkCode() {
        if (+this.code === this.dataRoom.code) {
          Swal.fire({
            title: 'יפה מאוד!',
            text: "הצלחת למצוא את הצופן של חדר מס'" + this.dataRoom.id ,
            timer: 3000,
            icon: 'success',
          })
        } else {
          Swal.fire({
            title: 'קוד שגוי',
            text: 'נסה שוב',
            timer: 3000,
            icon: 'error',
          })
        }
      }
    }
  }
</script>

<style scoped>
  @media (max-width: 767.98px) {}
</style>
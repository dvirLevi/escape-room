<template>
  <div class="w-100 f-center-right">
    <template v-if="!dataRoom.ifResolved">
      <aInput class="mt-4" v-model="code" placeholder="בדיקת צופן" :required="false" />
      <div class="g-butt bg-gradient mt-3 h5 p-2 ps-3 pe-3" @click="checkCode">בדוק</div>
    </template>
    <template v-else>
      <h4 class="mt-md-0 mt-3">הצופן של חדר מס' {{dataRoom.id}} הוא <span class="main-color fw-bold">{{dataRoom.code}}</span></h4>
    </template>
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
            text: "הצלחת למצוא את הצופן של חדר מס'" + this.dataRoom.id,
            timer: 3000,
            icon: 'success',
          })
          this.$router.push('/mainRoom/')
          this.$store.commit('completeRoom', this.dataRoom.id)
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
<template>
  <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass25.png')">
    <template v-slot:inst>
      <h3>קהילת בני המנשה החליטו לשתף פעולה עם השליח לתימן אך מחשש להתנכלות זרים הוחלט שרק חובשי הכובעים השחורים יגלו את
        הקוד למנעול הנכון. כמה כאלה יש בקהל (כובעים ממש לא כובע גרב)? מצאו אותם ולחצו על הכובע שלהם</h3>
    </template>
    <template v-slot:task>
      <findInImg @end-game="$store.commit('endTask', correntRoom.id)" />
    </template>
  </roomSlots>
</template>

<script>
  // @ is an alias to /src
  import findInImg from '@/components/findInImg.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      findInImg
    },
    data() {
      return {

      }
    },
    computed: {
      correntRoom() {
        return this.$store.state.rooms.filter((el) => {
          return el.id === +this.$route.name;
        })[0]
      }
    }
  }
</script>

<style scoped>


  @media (max-width: 991.98px) {
  
  }
</style>
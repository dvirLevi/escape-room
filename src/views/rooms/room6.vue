<template>
  <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass12.jpg')">
    <template v-slot:inst>
      <h4>לפניכם מקורות מידע מן ההיסטוריה של יהודי פרס.</h4>
       <h5>1. סדרו אותם לפי סדר כרונולוגי (סדר התרחשות).</h5>
       <h5>2. לאחר שתמלאו נכון תוכלו להיעזר בהנחיות שעל יד כל מקור ולצבוע את המשבצות שבלוח למטה.</h5>
       <h5>3. אם סידרתם נכון וצבעתם נכון תקבלו את הקוד מיהדות פרס!!!</h5>
    </template>
    <template v-slot:task>
      <arrangeSentences @end-game="$store.commit('endTask', correntRoom.id)" />
    </template>
  </roomSlots>
</template>

<script>
  // @ is an alias to /src
  import arrangeSentences from '@/components/arrangeSentences.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      arrangeSentences
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


  @media (max-width: 767.98px) {
  
  }
</style>
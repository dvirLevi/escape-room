<template>
 <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass9.png')">
    <template v-slot:inst>
      <h3>השליח חייב להגיע לשטרות הכסף שגזלו עוזרי משיח השקר מן היהודים. בהם יוכל לשחד את הרשעים במידה ולא יתנו לו
            לעבור במעברי הגבול. אבל...חייבים למיין ולהוציא את כל שטרות הרמב"ם כדי שלא ידעו שהרמב"ם הוא זה ששלח את האגרת
            שהרי אם יוודע הדבר הרמב"ם צפוי לעונש כבד</h3>
    </template>
    <template v-slot:task>
      <moneyBills :ifFreeze="correntRoom.ifCheck" @end-game="$store.commit('endTask', correntRoom.id)" />
    </template>
  </roomSlots>
</template>

<script>
  // @ is an alias to /src
  import moneyBills from '@/components/moneyBills.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room1',
    components: {
      moneyBills
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
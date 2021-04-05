<template>
  <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass12.jpg')">
    <template v-slot:inst>
      <h5>שלחת מברק דחוף לתימן בו אתה מבקש מן היהודים שיפנו לרבם ה"מורי" שיתפלל להצלחת המבצע. ילדי תימן שולחים לך
        מכתב חוזר המתאר את ה"מורי" שלהם אך הם רגילים לכתוב הפוך שהרי כך למדו בעניותם ששה שבעה מסביב לספר אחד...</h5>
      <h5>מצא בכתב ההפוך כמה תפקידים ל"מורי" (רב הקהילה) בהנהגת הקהילה והזן אותם בשדה הטקסט שמתחת למברק ככתבם ללא
        אותיות החיבור. מצא את הצופן ותפילת ה"מורי" תסייע לכם לפצח
        את המנעול!</h5>
    </template>
    <template v-slot:task>
      <mori @end-game="$store.commit('endTask', correntRoom.id)" />
    </template>
  </roomSlots>
</template>

<script>
  // @ is an alias to /src
  import mori from '@/components/mori.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room4',
    components: {
      mori
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
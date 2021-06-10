<template>
  <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass12.jpg')">
    <template v-slot:inst>
      <h4>שלחתם מברק דחוף לתימן בו אתם מבקשים מן היהודים שיפנו לרבם ה"מורי" שיתפלל להצלחת המבצע. ילדי תימן שולחים לכם
        מכתב חוזר המתאר את ה"מורי" שלהם אך הם רגילים לכתוב הפוך שהרי כך למדו בעניותם ששה שבעה מסביב לספר אחד...</h4>
      <h4>מצאו את תפקידי המורי השונים הניזכרים בכתב ההפוך והזינו אותם לבדיקה בחלון שמעל לטקסט. יש להזין כל תפקיד בנפרד וללא
        האותיות הנלוות למילה עצמה. לאחר שתסיימו תוכלו לגלות את הצופן ותפילת ה"מורי" תסייע לכם בהמשך הדרך...</h4>
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
  @media (max-width: 991.98px) {}
</style>
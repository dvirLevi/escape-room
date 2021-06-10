<template>
  <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass26.png')">
    <template v-slot:inst>
      <h3>יהודי מרוקו קבלו מידע סודי בדבר אחד ממספרי הקוד לתיבה הסודית. הם החליטו לצאת לעזרת אחיהם שבתימן אך כדי שהמידע
        לא יחשף על ידי השלטונות הם הצפינו את הקוד במכתב תמים המתאר את חייהם בעבר ובעתיד וכך העבירו אותו לשליח...</h3>
      <h3>מלאו במשבצות ספרות בודדות לפי הסדר בו הן מופיעות בטקסט! התעלמו מאפסים!</h3>
    </template>
    <template v-slot:task>
      <gridStory @end-game="$store.commit('endTask', correntRoom.id)" :ifFreeze="correntRoom.ifCheck" />
    </template>
  </roomSlots>
</template>

<script>
  // @ is an alias to /src
  import gridStory from '@/components/gridStory.vue'
  // import bg from '@/components/bg.vue'

  export default {
    name: 'room3',
    components: {
      gridStory
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
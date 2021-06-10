<template>
  <roomSlots :correntRoom="correntRoom" :img="require('@/assets/ass8.png')">
    <template v-slot:inst>
      <h3>סדרו את המפה שתנחה את השליח מתימן לספרד</h3>
    </template>
    <template v-slot:task>
      <puzzle @end-game="$store.commit('endTask', correntRoom.id)" :ifFreeze="correntRoom.ifCheck" />
    </template>
  </roomSlots>
</template>

<script>
  // @ is an alias to /src
  import puzzle from '@/components/puzzle.vue'

  export default {
    name: 'room1',
    components: {
      puzzle
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
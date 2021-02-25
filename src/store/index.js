import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    name: "",
    rooms: [{
        text: "חדר 1",
        link: "/MainRoom/1",
        code: 14,
        ifResolved: false,
        id: 1
      },
      {
        text: "חדר 2",
        link: "/MainRoom/2",
        code: 15,
        ifResolved: false,
        id: 2
      },
      {
        text: "חדר 3",
        link: "/MainRoom/3",
        code: 7,
        ifResolved: false,
        id: 3
      },
      {
        text: "חדר 4",
        link: "/MainRoom/4",
        code: 3,
        ifResolved: false,
        id: 4
      },
      {
        text: "חדר 5",
        link: "",
        code: 3,
        ifResolved: false,
        id: 5
      },
      {
        text: "חדר 6",
        link: "",
        code: 3,
        ifResolved: false,
        id: 6
      },
    ]
  },
  mutations: {
    pushName(state, name) {
      state.name = name;
    },
    completeRoom(state, id) {
      state.rooms.forEach((el) => {
        if (el.id === id) {
          el.ifResolved = true;
        }
      })
    }
  },
  actions: {},
  modules: {}
})
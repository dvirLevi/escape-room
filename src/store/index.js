import {
  createStore
} from 'vuex'
import Gpuzzle from './modules/Gpuzzle'
import GmoneyBills from './modules/GmoneyBills'
import GgridStory from './modules/GgridStory'
import Gmori from './modules/Gmori'
import GfindInImg from './modules/GfindInImg'
import GarrangeSentences from './modules/GarrangeSentences'

export default createStore({
  state: {
    name: "",
    ifMuted: false,
    rooms: [{
        text: "חדר 1",
        link: "/MainRoom/1",
        code: 14,
        ifCheck: false,
        ifResolved: false,
        id: 1
      },
      {
        text: "חדר 2",
        link: "/MainRoom/2",
        code: 15,
        ifCheck: false,
        ifResolved: false,
        id: 2
      },
      {
        text: "חדר 3",
        link: "/MainRoom/3",
        code: 7,
        ifCheck: false,
        ifResolved: false,
        id: 3
      },
      {
        text: "חדר 4",
        link: "/MainRoom/4",
        code: 7,
        ifCheck: false,
        ifResolved: false,
        id: 4
      },
      {
        text: "חדר 5",
        link: "/MainRoom/5",
        code: 4,
        ifCheck: false,
        ifResolved: false,
        id: 5
      },
      {
        text: "חדר 6",
        link: "/MainRoom/6",
        code: 20,
        ifCheck: false,
        ifResolved: false,
        id: 6
      }
    ]
  },
  mutations: {
    pushName(state, name) {
      state.name = name;
    },
    endTask(state, id) {
      state.rooms.forEach((el) => {
        if (el.id === id) {
          el.ifCheck = true;
        }
      })
      
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
  modules: {
    Gpuzzle,
    GmoneyBills,
    GgridStory,
    Gmori,
    GfindInImg,
    GarrangeSentences
  }
})
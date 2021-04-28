import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import {
    trackRouter
} from "vue-gtag-next"


const ifProvaidName = (to, from, next)=> {
  if(!store.state.name) next({ name: 'Home' });
  else next()
  // next()
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Story',
    name: 'Story',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Story.vue'),
    beforeEnter:  ifProvaidName,
  },
  {
    path: '/MainRoom',
    name: 'MainRoom',
    component: () => import('../views/MainRoom.vue'),
    beforeEnter:  ifProvaidName,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('../views/rooms/index.vue'),
      },
      {
        path: '1',
        name: '1',
        component: () => import('../views/rooms/room1.vue'),
      },
      {
        path: '2',
        name: '2',
        component: () => import('../views/rooms/room2.vue'),
      },
      {
        path: '3',
        name: '3',
        component: () => import('../views/rooms/room3.vue'),
      },
      {
        path: '4',
        name: '4',
        component: () => import('../views/rooms/room4.vue'),
      },
      {
        path: '5',
        name: '5',
        component: () => import('../views/rooms/room5.vue'),
      },
      {
        path: '6',
        name: '6',
        component: () => import('../views/rooms/room6.vue'),
      },
      {
        path: 'caveRoom',
        name: 'caveRoom',
        component: () => import('../views/rooms/caveRoom.vue'),
      }
    ]
  }

  
]

const router = createRouter({
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  history: createWebHistory(process.env.BASE_URL),
  routes
})

 trackRouter(router);

export default router

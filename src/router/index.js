import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

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
    component: () => import(/* webpackChunkName: "about" */ '../views/Story.vue')
  },
  {
    path: '/MainRoom',
    name: 'MainRoom',
    component: () => import('../views/MainRoom.vue'),
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
      
      // {
      //   path: 'posts',
      //   component: UserPosts
      // }
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

export default router

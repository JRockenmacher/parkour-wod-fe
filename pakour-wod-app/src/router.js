import Vue from 'vue'
import Router from 'vue-router'
import Workouts from './views/Workouts.vue'
import Movements from './views/Movements.vue'
import Info from './views/Info.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workouts',
      component: Workouts
    },
    {
      path: '/movements',
      name: 'movements',
      component: Movements
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    }
  ]
})

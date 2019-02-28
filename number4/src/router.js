import Vue from 'vue'
import Router from 'vue-router'

import menu from './views/menu.vue'
import review from './views/review.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'menu',
      component: menu
    },
    {
      path: '/reviews',
      name: 'review',
      component: review
    }
  ]
})

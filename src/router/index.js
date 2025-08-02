import { createWebHistory, createRouter } from 'vue-router'

import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/jobs', component: Jobs },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

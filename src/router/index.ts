import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import PollsView from '@/views/PollsView.vue'
import QuestionsView from '@/views/QuestionsView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: PollsView
  },
  {
    path: '/questions',
    component: QuestionsView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

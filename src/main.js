import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

import { createRouter, createWebHistory } from 'vue-router'

const pinia = createPinia()

const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/',
        name: 'main',
        component: () => import('@/components/MainPage.vue')
      },
      { path: '/tasks',
        name: 'tasks',
        component: () => import('@/components/TaskPage.vue') 
      },
      { path: '/:catchAll(.*)', component: NotFound },
    ]
})
  
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

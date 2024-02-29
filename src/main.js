import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'

import { createRouter } from 'vue-router'

const pinia = createPinia()

const router = createRouter({
    routes: [
      { path: '/',
        name: 'main',
        component: () => import('@/components/MainPage.vue')
      },
      { path: '/tasks',
        name: 'tasks',
        component: () => import('@/components/TaskPage.vue') 
      },
    ]
})
  
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')

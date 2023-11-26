import { createRouter, createWebHistory } from "vue-router"

const routes = [
  { path: '', name: 'home', component: () => import('@/views/Home.vue') },
  { path: '/tours', name: 'tours', component: () => import('@/views/Tours.vue') },
  { path: '/cultura', name: 'cultura', component: () => import('@/views/Cultura.vue') },
  { path: '/registro', name: 'registro', component: () => import('@/views/Registro.vue') },
  { path: '/tours/vale_de_la_luna', name: 'valleDeLaLuna', component: () => import('@/views/ValleDeLaLuna.vue') },
  { path: '/tours/isla_del_sol', name: 'isla_Del_Sol', component: () => import('@/views/IslaDelSol.vue') },
  { path: '/tours/salar_de_uyuni', name: 'salarDeUyuni', component: () => import('@/views/SalarDeUyuni.vue') },
  { path: '/tours/monte_chacaltaya', name: 'monteChacaltaya', component: () => import('@/views/MonteChacaltaya.vue') },
  { path: '/tours/parque_nacional_madidi', name: 'parqueNacionalMadidi', component: () => import('@/views/ParqueNacionalMadidi.vue') },
  { path: '/tours/parque_machia', name: 'parqueMachia', component: () => import('@/views/ParqueMachia.vue') },
  { path: '/tours/calle_jean', name: 'calleJean', component: () => import('@/views/CalleJean.vue') },
  { path: '/tours/tiwanaku', name: 'tiwanaku', component: () => import('@/views/tiwanaku.vue') }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
  routes,
  history: createWebHistory()
})

export default router

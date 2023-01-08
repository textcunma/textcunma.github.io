import { createRouter, createWebHashHistory } from 'vue-router'
import TopPage from '../views/TopPage.vue'
import ProductsPage from '../views/ProductsPage.vue'

const routes = [
  {
    path: '/',
    name: 'toppage',
    component: TopPage
  },
  {
     path: '/products',
     name: 'products',
     component: ProductsPage
   },
]

const router = createRouter({
     history: createWebHashHistory(process.env.BASE_URL),
     routes,
     scrollBehavior(to) {
          if (to.hash) {
               return { el: CSS.escape(to.hash).slice(1), behavior: 'smooth' };
          } else {
               return { top: 0, behavior: 'smooth' };
          }
     }
})

export default router
import { createRouter, createWebHistory } from 'vue-router'

// 각 페이지 url 설정
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductList.vue')
  },
  {
    path: '/detail',
    name: 'ProductDetail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/ProductDetail.vue')
  },
  {
    path: '/create',
    name: 'ProductCreate',
    component: () => import(/* webpackChunkName: "create" */ '../views/ProductCreate.vue')
  },
  {
    path: '/update',
    name: 'ProductUpdate',
    component: () => import(/* webpackChunkName: "update" */ '../views/ProductUpdate.vue')
  },
  {
    path: '/sales',
    name: 'SalesList',
    component: () => import(/* webpackChunkName: "sales" */ '../views/SalesList.vue')
  },
  {
    path: '/image_insert',
    name: 'ImageInsert',
    component: () => import(/* webpackChunkName: "image_insert" */ '../views/ImageInsert.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TablesViewVue from '../views/TablesView.vue'
import TableDetail from '../views/TableDetail.vue'
import TableUpdate from '../views/TableUpdate.vue'
import TableAdd from '../views/TableAdd.vue'
import UnitView from '../views/UnitView.vue'
import UnitDetailView from '../views/UnitDetailView.vue'
import UnitUpdateView from '../views/UnitUpdateView.vue'
import ItemView from '../views/ItemView.vue'
import ItemDetail from '../views/ItemDetail.vue'
import ItemUpdateView from '../views/ItemUpdateView.vue'
import OrderView from '../views/OrderView.vue'
import Profile from '../views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/tables',
      name: 'Tables',
      component: TablesViewVue
    },

    {
      path: '/tables/view/:id',
      name: 'table-detail',
      component: TableDetail
    },

    {
      path: '/tables/update/:id',
      component: TableUpdate
    },
    {
      path: '/tables/add',
      component: TableAdd
    },

    {
      path: '/units',
      component: UnitView
    },

    {
      path: '/units/view/:id',

      component: UnitDetailView
    },

    {
      path: '/units/update/:id',
      component: UnitUpdateView
    },

    {
      path: '/items',
      component: ItemView
    },

    {
      path: '/items/view/:id',
      component: ItemDetail
    },

    {
      path: '/items/update/:id',
      component: ItemUpdateView
    },
    {
      path: '/orders',
      component: OrderView
    },

    {
      path: '/profile',
      component: Profile
    }
  ]
})

export default router

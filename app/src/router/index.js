import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Form from '../views/Form.vue'
import ItemCard from '../views/ItemCard.vue'
import DishDetails from '../components/DishDetails.vue'
import DishClear from '../components/DishClear.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/itemForm',
    name: 'Form',
    component: Form
  },
  {
    path: '/dishes',
    name: 'ItemCard',
    component: ItemCard
  },
  {
    path: '/dishes/:id',
    name: 'DishDetails',
    component: DishDetails,
    props:true
  },
  {
    path: '/dishes/clear',
    name: 'DishClear',
    component: DishClear,
    props:true
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
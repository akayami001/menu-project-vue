import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import Add from "../components/Add.vue";
import Update from "../components/Update.vue";
import ItemCard from "../components/ItemCard.vue";
import DishDetails from "../components/DishDetails.vue";
import DishClear from "../components/DishClear.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/signUp",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/add",
    name: "Add",
    component: Add,
  },
  {
    path: "/dishes/:id",
    name: "Update",
    component: Update,
  },
  {
    path: "/dishes",
    name: "ItemCard",
    component: ItemCard,
  },
  {
    path: "/dishes/:id",
    name: "Dish",
    component: DishDetails,
    props: true,
  },
  {
    path: "/dishes/clear",
    name: "DishClear",
    component: DishClear,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

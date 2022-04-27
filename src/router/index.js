import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
// import DualTypes from "../views/DualTypes.vue"
import pokemonTypesGen6 from "@/PokemonTypesGen6.js"
import pokemonTypesGen2 from "@/PokemonTypesGen2.js"
import pokemonTypesGen1 from "@/PokemonTypesGen1.js"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: {
      typesByGeneration: {
        gen1: pokemonTypesGen1,
        gen2: pokemonTypesGen2,
        gen6: pokemonTypesGen6,
      },
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router

import { createRouter, createWebHashHistory } from "vue-router"
import routes from "./routes"
import system from "./system"

const router = createRouter({
  history: createWebHashHistory(), routes, 
})

export default router

import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/home/Home.vue"
import { toolsRouters } from "./modules/tools"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{ path: "/", component: Home }, ...toolsRouters]
})

export default router

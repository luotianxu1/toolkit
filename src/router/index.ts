import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/home/Home.vue"
import Playlet from "@/views/toolkit/playlet/Playlet.vue"

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{ path: "/", component: Home },
		{ path: "/playlet", component: Playlet }
	]
})

export default router

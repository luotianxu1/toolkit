<template>
	<div class="page">
		<div class="router">
			<RouterView></RouterView>
		</div>
		<div class="tabber">
			<van-tabbar route>
				<van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
				<van-tabbar-item replace to="/tools" icon="apps-o">工具</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<style scoped lang="scss">
.page {
	width: 100vw;
	height: 100vh;

	.tabber {
		height: 50px;
	}
}
</style>

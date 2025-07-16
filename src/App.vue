<template>
	<RouterView></RouterView>
	<van-tabbar route>
		<van-tabbar-item replace to="/" icon="home-o">主页</van-tabbar-item>
		<van-tabbar-item replace to="/tools" icon="apps-o">工具</van-tabbar-item>
	</van-tabbar>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router"
</script>

<style scoped lang="scss"></style>

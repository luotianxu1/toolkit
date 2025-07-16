<template>
	<div class="main">
		<div class="item" @click="navigator()">短剧</div>
		<div class="item" @click="navigator()">短剧</div>
		<div class="item" @click="navigator()">短剧</div>
		<div class="item" @click="navigator()">短剧</div>
		<div class="item" @click="navigator()">短剧</div>
		<div class="item" @click="navigator()">短剧</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
const navigator = () => {
	router.push({ path: "/playlet" })
}
</script>

<style scoped lang="scss">
.main {
	display: flex;
	width: 100%;
	height: 100%;
	padding: 10px;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-content: space-around;
	gap: calc((100% - 85vw) / 2);

	.item {
		display: flex;
		width: 20vw;
		height: 20vw;
		margin-bottom: calc((100% - 85vw) / 2);
		align-items: center;
		justify-content: center;
	}
}
</style>

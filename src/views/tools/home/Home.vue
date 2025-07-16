<template>
	<div class="main">
		<van-grid :border="true" :column-num="4" :gutter="10" square>
			<van-grid-item v-for="(item, index) in list" :key="index">
				<div class="item" @click="navigator(item.url)">{{ item.name }}</div>
			</van-grid-item>
		</van-grid>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
const list = [{ url: "/tools/playlet", name: "短剧" }]
const navigator = (url: string) => {
	router.push({ path: url })
}
</script>

<style scoped lang="scss">
.main {
	width: 100%;
	height: 100%;
	padding: 10px;

	.item {
		display: flex;
		align-items: center;
		justify-content: center;
	}
}
</style>

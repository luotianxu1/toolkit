<template>
	<div class="main">
		<van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" />
		<div class="list">
			<div class="item"></div>
		</div>
	</div>
</template>

<script setup lang="ts">
const value = ref("")

const onSearch = (e: String) => {
	if (!e) {
		return
	}
	console.log(e)
}
</script>

<style scoped lang="scss">
.main {
	display: flex;
	width: 100%;
	height: 100%;
	flex-direction: column;

	.list {
		flex: 1;
	}
}
</style>

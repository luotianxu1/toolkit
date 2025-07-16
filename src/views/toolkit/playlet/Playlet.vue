<template>
	<div class="main">
		<van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" />
		<div class="list">
			<div class="item" v-for="(item, index) in list" :key="index">
				<div class="name">{{ item.name }}</div>
				<van-button type="primary" size="small" @click="copy(item.viewlink)">复制链接</van-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { copyToClipboard } from "@/utils/utils"
import axios from "axios"

interface Item {
	name: string
	viewlink: string
	addtime: string
}

const value = ref("")
const list = ref<Item[]>([])

const onSearch = (e: string) => {
	if (!e) {
		return
	}
	axios.get(`https://api.kuleu.com/api/action?text= + ${e}`).then(res => {
		if (res.data.code === 200) {
			console.log(res.data.data)
			list.value = res.data.data
		}
	})
}

const copy = (viewlink: string) => {
	copyToClipboard(viewlink)
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
		padding: 0 10px;

		.item {
			display: flex;
			width: 100%;
			padding: 14px 10px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);
			align-items: center;
			justify-content: space-between;

			&:last-child {
				border: 0;
			}

			.name {
				max-width: 70%;

				/* white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis; */
			}
		}
	}
}
</style>

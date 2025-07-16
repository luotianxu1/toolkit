<template>
	<div class="main">
		<van-search v-model="value" placeholder="请输入搜索关键词" @search="onSearch" @cancel="onCancel" @clear="onCancel" />
		<div class="list">
			<div class="item" v-for="(item, index) in list" :key="index">
				<div class="name">{{ item.name }}</div>
				<div class="desc">
					<div class="title">更新时间：</div>
					<div>{{ item.addtime }}</div>
				</div>
				<div class="desc">
					<div class="title">链接：</div>
					<div class="link">
						<a :href="item.viewlink" target="_blank">{{ item.viewlink }}</a>
					</div>
				</div>
				<!-- <van-button type="primary" size="small" @click="copy(item.viewlink)">复制链接</van-button> -->
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { copyToClipboard } from "@/utils/utils"
import { Toast } from "vant"
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
		} else if (res.data.code === 404) {
			Toast(res.data.msg)
		}
	})
}

const onCancel = () => {
	value.value = ""
	list.value = []
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
			width: 100%;
			padding: 14px 10px;
			border-bottom: 1px solid rgba(0, 0, 0, 0.1);

			&:last-child {
				border: 0;
			}

			.name {
				margin-bottom: 10px;
				font-size: 18px;
				font-weight: 600;
			}

			.desc {
				display: flex;
				align-items: center;
				margin-bottom: 5px;

				&:last-child {
					margin: 0;
				}
			}

			.title {
				width: 80px;
			}

			.link {
				width: calc(100% - 120px);
				color: #1989fa;
				word-wrap: break-word;
			}
		}
	}
}
</style>

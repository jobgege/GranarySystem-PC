<template>
	<div class="tags" v-if="tags.show">
		<ul>
			<li
				class="tags-li"
				v-for="(item, index) in tags.list"
				:class="{ active: isActive(item.path) }"
				:key="index"
			>
				<router-link :to="item.path" class="tags-li-title" style="text-decoration: none;">{{ item.title }}</router-link>
				<el-icon @click="closeTags(index)"><Close /></el-icon>
			</li>
		</ul>
		<div class="tags-close-box">
			<el-dropdown @command="handleTags">
				<el-button size="small" type="primary">
					标签选项
					<el-icon class="el-icon--right">
						<arrow-down />
					</el-icon>
				</el-button>
				<template #dropdown>
					<el-dropdown-menu size="small">
						<el-dropdown-item command="other">关闭其他</el-dropdown-item>
						<el-dropdown-item command="all">关闭所有</el-dropdown-item>
					</el-dropdown-menu>
				</template>
			</el-dropdown>
		</div>
	</div>
</template>

<script setup>
// toolbar历史页面组件
import { useTagsStore } from '../store/tags';
import { onBeforeRouteUpdate, useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const isActive = (path) => {
	return path === route.path;
};

const tags = useTagsStore();
// 关闭单个标签
const closeTags = (index) => {
	const delItem = tags.list[index];
	tags.delTagsItem(index);
	const item = tags.list[index] ? tags.list[index] : tags.list[index - 1];
	if (item) {
		delItem.path === route.path && router.push(item.path);
	} else {
		router.push('/');
	}
};

// 设置标签
const setTags = (route) => {
	const isExist = tags.list.some(item => {
		//用于设置组件高亮
		return item.path === route.path;
	});
	if (!isExist) {
		//存的数目超过8个时
		if (tags.list.length >= 8) tags.delTagsItem(0);
		tags.setTagsItem({
			name: route.name,
			title: route.meta.title,
			path: route.path
		});
	}
};
setTags(route);
onBeforeRouteUpdate(to => {
	//在每次路由跳转之前，设置好标签
	setTags(to);
});

// 关闭全部标签
const closeAll = () => {
	tags.clearTags();
	router.push('/');
};
// 关闭其他标签
const closeOther = () => {
	const curItem = tags.list.filter(item => {
		return item.path === route.path;
	});
	tags.closeTagsOther(curItem);
};
const handleTags = (command) => {
	command === 'other' ? closeOther() : closeAll();
};

// 关闭当前页面的标签页,但是点击别的关闭按钮也会触发当前页面关闭
// const closecurrent = ()=>{tags.closeCurrentTag({
//     $router: router,
//     $route: route
// });}

</script>

<style scoped lang="less">
.tags {
	position: relative;
	height: 30px;
	overflow: hidden;
	background: #fff;
	padding-right: 120px;
	box-shadow: 0 5px 10px #ddd;
}

.tags ul {
	box-sizing: border-box;
	width: 100%;
	height: 100%;
}

.tags-li {
	display: flex;
	align-items: center;
	float: left;
	margin: 3px 5px 2px 3px;
	border-radius: 3px;
	font-size: 12px;
	overflow: hidden;
	cursor: pointer;
	height: 23px;
	border: 1px solid #e9eaec;
	background: #fff;
	padding: 0 5px 0 12px;
	color: #666;
	-webkit-transition: all 0.3s ease-in;
	-moz-transition: all 0.3s ease-in;
	transition: all 0.3s ease-in;
}

.tags-li:not(.active):hover {
	background: #f8f8f8;
}

.tags-li.active {
	color: #ffffff;
	background-color: #2a7ddb;
}

.tags-li-title {
	float: left;
	max-width: 80px;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	margin-right: 5px;
	color: #666;
}

.tags-li.active .tags-li-title {
	color: #fffdfd;
}

.tags-close-box {
	position: absolute;
	right: 0;
	top: 0;
	box-sizing: border-box;
	padding-top: 1px;
	text-align: center;
	width: 110px;
	height: 30px;
	background: #fff;
	box-shadow: -3px 0 15px 3px rgba(0, 0, 0, 0.1);
	z-index: 10;
}
</style>

import { defineStore } from 'pinia';
//用pinia层来存储路由信息
// interface ListItem {
// 	name: string;
// 	path: string;
// 	title: string;
// }

export const useTagsStore = defineStore('tags', {
	state: () => {
		return {
			list: []
		};
	},
	getters: {
		show: state => {
			return state.list.length > 0;
			//这个指决定的是tab组件是否显示
		},
		nameList: state => {
			return state.list.map(item => item.name);//map指传入一个回调函数，返回值的是name的数组
			//遍历对象数组
		}
	},
	actions: {
		delTagsItem(index) {
			this.list.splice(index, 1);
			// 移除传入的下标
		},
		setTagsItem(data) {
			this.list.push(data);
		},
		clearTags() {
			this.list = [];
		},
		closeTagsOther(data) {
			this.list = data;
		},
		closeCurrentTag(data) {
			for (let i = 0, len = this.list.length; i < len; i++) {
				//关闭当前标签页，要写一定的逻辑处理
				const item = this.list[i];
				if (item.path === data.$route.fullPath) {
					// 如果遍历到的标签页是当前正在显示的标签页，则关闭其
					if (i < len - 1) {
						data.$router.push(this.list[i + 1].path);
					} else if (i > 0) {
						data.$router.push(this.list[i - 1].path);
					} else {
						data.$router.push('/');
					}
					this.list.splice(i, 1);
					break;
				}
			}
		}
	},
	persist: {
        enabled: true, // 开启数据缓存
    }

});

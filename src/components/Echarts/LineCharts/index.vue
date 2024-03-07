<script setup>
	import { ref, inject, onMounted, onBeforeUnmount} from 'vue';
	import * as echarts from 'echarts';

	// 获取echart挂载的DOM节点
	const container = ref();
	
	// // 定义延时器指针对象，便于组件实例销毁的时候以便清除
	const timer = ref();

	// // 通过 inject 接收Echarts
	// const Echarts = inject('$echarts');
	
	// 或
	// 通过Vue全局注册方式获取
	// const {proxy}: any = getCurrentInstance();
	// var chartDom = document.getElementById('echarts1');


	

	const initEchartsOneFn = () => {
		// echarts初始化
		 const myChart = echarts.init(container.value)
		// var myChart = echarts.init(chartDom);

		// 或
		// let myChart = proxy.$echarts.init(container.value);
	
		const option = {
			// 自定义echarts图标相关配置，要进行修改
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: 'line'
            }
         ]
		};
		
		myChart.setOption(option);
		
		// 根据页面大小自动响应图表大小
		window.addEventListener("resize", function () {
		    myChart.resize();
		});
	}

	onMounted(()=>{
		initEchartsOneFn()
		// 定时调用获取新数据
	});

</script>

// 此处部分将就着看看
<template>
	<div id="echarts1" ref="container"></div>
</template>

<style scoped lang="less">
	#echarts1{
	width: 43.07vw;
    height: 50vh;
	}
</style>

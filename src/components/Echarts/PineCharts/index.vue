<!-- 累计质检质量饼图 -->
<script setup>
	import { ref, inject, onMounted, onBeforeUnmount} from 'vue';
	import * as echarts from 'echarts';

	// 获取echart挂载的DOM节点
	const container = ref();
	
	// // 定义延时器指针对象，便于组件实例销毁的时候以便清除
	const timer = ref();
	const initEchartsOneFn = () => {
		// echarts初始化
		 const myChart = echarts.init(container.value)
		// var myChart = echarts.init(chartDom);

		// 或
		// let myChart = proxy.$echarts.init(container.value);
	
		const option = {
			// 自定义echarts图标相关配置，要进行修改
            tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: 10,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
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
<template>
	<div id="echarts1" ref="container"></div>
</template>

<style scoped lang="less">
	#echarts1{
    width: 14.05vw;
    height:27vh;
	}
</style>

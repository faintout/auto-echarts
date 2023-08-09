<script setup>
import Line from './components/line.vue'
import Pie from './components/pie.vue'
import Gauge from './components/gauge.vue'
import { reactive, shallowRef, ref } from 'vue'
const echartComponentsList = reactive([
	{
		name: 'line',
		component: shallowRef(Line),
	},
	{
		name: 'pie',
		component: shallowRef(Pie),
	},
	{
		name: 'gauge',
		component: shallowRef(Gauge),
	},
])
const currComName = ref('line')
</script>

<template>
AutoEchart - 二次封装，自适应文字大小，自定义样式配置,适用于大屏项目。
<br/>
	<div
		class="components-name"
		:class="{'active':currComName===item.name}"
		v-for="item in echartComponentsList"
		:key="item.name"
		@click="currComName = item.name"
	>{{item.name}}</div>
	<component :is="echartComponentsList.find(com=>com.name===currComName)?.component"></component>
</template>

<style scoped>
.components-name {
	padding: 5px 10px;
	cursor: pointer;
	margin: 10px;
	background: lightseagreen;
	border-radius: 10px;
	display: inline-block;
}
.active {
	background: lightsalmon;
}


</style>
<style>
.chart {
	width: 30vw;
	height: 30vh;
  border: 1px solid lightseagreen;
	/* background: lightseagreen; */
}
html,
body {
	background: #001529 !important;
  color: #eae8e8;
}
</style>

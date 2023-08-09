<template>
   <div class="chart pieChart">
    <v-echarts :autoresize="true" :option="pirChartCalc" :update-options="{notMerge: true}"/>
   </div>
   <div class="chart pieChart1">
    <v-echarts :autoresize="true" :option="pirChartCalc1" :update-options="{notMerge: true}"/>
   </div>
</template>

<script setup>
import { computed, reactive} from 'vue'
import {Pie} from '../utils/echartOptionsConfig'
import useCalcChart from '../hooks/useCalcChart.js'
const { 
    strReplaceCalculator
} = reactive(useCalcChart())
const pieChart = reactive({
    data: [
		{ value: 1996, name: '小型车' },
		{ value: 1270, name: '大型车-公交' },
		{ value: 1170, name: '大型车-其他' },
		{ value: 1230, name: '其它' },
		{ value: 1220, name: '其它1' },
		// { value: 1210, name: '其它2' },
	],
})
const pieChart1 = reactive({
    data: [
		{ value: 1996, name: '小型车' },
		{ value: 1270, name: '大型车-公交' },
		{ value: 1170, name: '大型车-其他' },
		// { value: 1230, name: '其它' },
		// { value: 1220, name: '其它1' },
		// { value: 1210, name: '其它2' },
	],
})
const pirChartCalc = computed(()=>strReplaceCalculator(new Pie().multiRingPie(pieChart)))
const pirChartCalc1 = computed(()=>strReplaceCalculator(new Pie().ringPie(pieChart1)))
</script>
<style scoped >
.pieChart{
    width: calc(1304 / 6480 * 100vw) !important;
    height: calc(448 / 3240 * 100vh) !important;
}
.pieChart1{
    width: calc(870 / 6480 * 100vw) !important;
    height: calc(448 / 3240 * 100vh) !important;
}
</style>
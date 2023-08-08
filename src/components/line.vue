<template>
   <div class="chart">
    <v-echarts :autoresize="true" :option="lineChartCalc" :update-options="{notMerge: true}"/>
   </div>
</template>

<script setup>
import { computed, reactive} from 'vue'
import {Line} from '../utils/echartOptionsConfig'
import useCalcChart from '../hooks/useCalcChart.js'
const { 
    strReplaceCalculator
} = reactive(useCalcChart())
const lineChart = reactive({
    xAxis: {
		data:[
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
		22, 23, 24,
	]
	},
	series: [
		{
			data: [
				2000, 3000, 4000, 5000, 2500, 2600, 2000, 3000, 4000, 5000, 2500, 2600,
				2000, 3000, 4000, 5000, 2500,
			],
			name: '今日',
		},
		{
			data: [
				3000, 2000, 7000, 5000, 5500, 2600, 5000, 3000, 4000, 5000, 6500, 2600,
				2000, 6000, 4000, 5000, 2500,
			],
			name: '昨日',
		},
	],
})
const lineChartCalc = computed(()=>strReplaceCalculator(new Line().base(lineChart)))
</script>
<style scoped lang="scss">
</style>
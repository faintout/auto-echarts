<template>
   <div class="chart">
    <GeneralChart :option="pieChart"></GeneralChart>
   </div>
   <div class="chart">
    <GeneralChart :option="pieChart1"></GeneralChart>
   </div>
   <div class="chart">
    <GeneralChart :option="gapChart" @legendSelectChanged="legendSelectChanged"></GeneralChart>
   </div>
   <div class="chart">
    <GeneralChart :option="gapChartLegend" @legendSelectChanged="legendSelectChanged"></GeneralChart>
   </div>
</template>

<script setup>
import { computed, reactive,ref} from 'vue'
import GeneralChart from '@/components/chart/generalChart.vue'
import getMultiRingPie from '@/components/chart/chartOptions/pie/multiRingPie'
import getRingPie from '@/components/chart/chartOptions/pie/ringPie'
import gapPie,{legendSelectChanged}  from '@/components/chart/chartOptions/pie/gapPie'
const pieChart = ref(null)
const pieChart1 = ref(null)

const gapChart = ref(null)
const gapChartLegend = ref(null)
pieChart.value = getMultiRingPie([
		{ value: 1996, name: '小型车' },
		{ value: 1270, name: '大型车-公交' },
		{ value: 1170, name: '大型车-其他' },
		{ value: 1230, name: '其它' },
		{ value: 1220, name: '其它1' },
		// { value: 1210, name: '其它2' },
	])
pieChart1.value = getRingPie([
		{ value: 1996, name: '小型车' },
		{ value: 1270, name: '大型车-公交' },
		{ value: 1170, name: '大型车-其他' },
		// { value: 1230, name: '其它' },
		// { value: 1220, name: '其它1' },
		// { value: 1210, name: '其它2' },
	])

	gapChart.value = gapPie([{
        "value": 1,
        "name": "小型车"
    },
    {
        "value": 2,
        "name": "公交车"
    },
    {
        "value": 3,
        "name": "渣土车"
    },
    {
        "value": 4,
        "name": "大型车"
    },
    {
        "value": 5,
        "name": "其它"
    },
    {
        "value": 6,
        "name": "非新能源车"
    },
    {
        "value": 7,
        "name": "大型车1"
    },
    // {
    //     "value": 1200,
    //     "name": "其它"
    // },
    // {
    //     "value": 1996,
    //     "name": "小型车1"
    // },
    // {
    //     "value": 1270,
    //     "name": "公交车2"
    // },
    // {
    //     "value": 1170,
    //     "name": "渣土车3"
    // },
    // {
    //     "value": 1480,
    //     "name": "大型车4"
    // },
    // {
    //     "value": 1200,
    //     "name": "其它5"
    // }
],{
    titleName:'车辆总数',
    lengthDetailShow:false
})
gapChartLegend.value = gapPie([{
        "value": 1996,
        "name": "小型车"
    },
    {
        "value": 1270,
        "name": "公交车"
    },
    {
        "value": 1170,
        "name": "渣土车"
    },
    {
        "value": 1480,
        "name": "大型车"
    },
    {
        "value": 1200,
        "name": "其它"
    },
    {
        "value": 1170,
        "name": "非新能源车"
    },
    {
        "value": 1480,
        "name": "大型车1"
    },
    {
        "value": 1200,
        "name": "其它1"
    },
    {
        "value": 1996,
        "name": "小型车1"
    },
    {
        "value": 1270,
        "name": "公交车2"
    },
    // {
    //     "value": 1170,
    //     "name": "渣土车3"
    // },
    // {
    //     "value": 1480,
    //     "name": "大型车4"
    // },
    // {
    //     "value": 1200,
    //     "name": "其它5"
    // }
],{
    titleName:'车辆总数',
    lengthDetailShow:true,
    isLegendNumClick:true
})
</script>
<style scoped>
</style>
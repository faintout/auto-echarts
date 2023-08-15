<template>
   <div class="chart gaugeChart">
    <v-echarts :autoresize="true" :option="gaugeChartCalc" :update-options="{notMerge: true}"/>
   </div>
</template>

<script setup>
import { computed, reactive} from 'vue'
import getImageGauge from '../utils/echartOptions/gauge/imageGauge'
import useCalcChart from '../hooks/useCalcChart.js'
const { 
    replaceOptionsSize
} = reactive(useCalcChart())
const gaugeChart = reactive([
        {
          value: 50,
        }
      ])
const gaugeChartCalc = computed(()=>replaceOptionsSize(getImageGauge(gaugeChart)))
</script>
<style scoped >
.gaugeChart{
    width: calc(498 / 6480 * 100vw) !important;
    height: calc(498 / 6480 * 100vw) !important;
}
</style>
<template>
   <div class="chart gaugeChart">
    <v-echarts :autoresize="true" :option="gaugeChartCalc" :update-options="{notMerge: true}"/>
   </div>
</template>

<script setup>
import { computed, reactive} from 'vue'
import {Gauge} from '../utils/echartOptionsConfig'
import useCalcChart from '../hooks/useCalcChart.js'
const { 
    strReplaceCalculator
} = reactive(useCalcChart())
const gaugeChart = reactive({
    series: [
    {
      type: 'gauge',
      progress: {
        show: true
      },
      data: [
        {
         
          value: 50,
        }
      ]
    }
  ]
})
const gaugeChartCalc = computed(()=>strReplaceCalculator(new Gauge().imageGauge(gaugeChart)))
</script>
<style scoped >
.gaugeChart{
    width: calc(498 / 6480 * 100vw) !important;
    height: calc(498 / 6480 * 100vw) !important;
}
</style>
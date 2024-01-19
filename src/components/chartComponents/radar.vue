<template>
   <div class="chart-box">
      <div class="chart">
       <GeneralChart :option="radarChart"></GeneralChart>
      </div>
   </div>
</template>

<script setup>
import { computed, reactive,ref} from 'vue'
import GeneralChart from '@/components/chart/generalChart.vue'
import RadarBase from '@/components/chart/chartOptions/radar/base'
const radarChart = ref(null)
radarChart.value = new RadarBase()
</script>
<style scoped >
</style>
<template>
   <div class="chart">
    <GeneralChart :option="radarChart"></GeneralChart>
   </div>
</template>

<script setup>
import { computed, reactive,ref} from 'vue'
import GeneralChart from '@/components/chart/generalChart.vue'
import radarBase from '@/components/chart/chartOptions/radar/base'
const radarChart = ref(null)
radarChart.value = radarBase()
</script>
<style scoped >
</style>
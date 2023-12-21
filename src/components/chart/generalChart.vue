<template>
    <v-echarts ref="chartRef" @legendSelectChanged="handleLegendSelectChanged" v-if="options" :autoresize="true" :option="options" :update-options="{notMerge: true}"/>
</template>

<script setup>
import { computed, reactive,ref} from 'vue'
import useCalcChart from '@/hooks/useCalcChart.js'
const chartRef = ref(null)
const props = defineProps({
    option: {
        type: Object,
        default: {}
    }
})
const { 
    replaceOptionsSize
} = reactive(useCalcChart())
const options = computed(()=>replaceOptionsSize(props.option))
const emits = defineEmits([
    'legendSelectChanged'
])
const handleLegendSelectChanged = (params) => emits('legendSelectChanged', chartRef.value,params)
</script>
<style scoped lang="scss">
</style>
import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)
/**
 * echarts
 */
import echarts from 'vue-echarts'
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { BarChart, PieChart, PictorialBarChart, LineChart,GaugeChart } from 'echarts/charts'
import {GridComponent, TooltipComponent, TitleComponent, LegendComponent, DataZoomComponent, ToolboxComponent,GraphicComponent } from 'echarts/components'
use([
    CanvasRenderer,
    BarChart,
    PieChart,
    PictorialBarChart,
    LineChart,
    GaugeChart,
    GridComponent,
    TooltipComponent,
    TitleComponent,
    LegendComponent,
    DataZoomComponent,
    ToolboxComponent,
    GraphicComponent
])
app.component('v-echarts', echarts);
app.mount('#app')

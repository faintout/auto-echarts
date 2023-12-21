import { createApp } from 'vue'
import App from './App.vue'


const app = createApp(App)

// Highcharts
import Highcharts from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts)
/**
 * echarts
 */
import echarts from 'vue-echarts'
import { use } from "echarts/core"
import { CanvasRenderer } from "echarts/renderers"
import { BarChart, PieChart, PictorialBarChart, LineChart,GaugeChart ,RadarChart} from 'echarts/charts'
import {GridComponent, TooltipComponent, TitleComponent, LegendComponent, DataZoomComponent, ToolboxComponent,GraphicComponent } from 'echarts/components'
use([
    CanvasRenderer,
    BarChart,
    RadarChart,
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

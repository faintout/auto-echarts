import * as echarts from 'echarts'
const colorList =  [
    [
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            { offset: 1, color: 'rgba(35, 101, 225, 1)' },
            { offset: 0, color: 'rgba(150, 234, 255, 1)' },
        ]),
        'rgba(103, 178, 255, 0.3000)',
        'rgba(232, 102, 73, 0)',
        'rgba(150,234,255,0.6000)',
    ],
    [
        new echarts.graphic.LinearGradient(0, 0, 1, 1, [
            { offset: 1, color: 'rgba(232, 102, 73, 1)' },
            { offset: 0, color: 'rgba(240, 200, 183, 1)' },
        ]),
        'rgba(232, 130, 73, 0.3000)',
        'rgba(35, 101, 225, 0)',
        'rgba(255,120,120,0.6000)',
    ],
]
//配置seriesData
const getSeriesData = (data)=>{
    return data.map((v,i)=>{
        return {
            type: "line",
            name: v.name,
            data: v.data,
            yAxisIndex: v.yAxisIndex ? v.yAxisIndex : 0,
            symbolSize: 'w(15)',
            smooth: true,
            // symbol: 'none',
            areaStyle: {
              color: {
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: colorList[i]?.[1] || defaultColor, // 0% 处的颜色
                },
                  {
                    offset: 1,
                    color: colorList[i]?.[2] || defaultColor, // 100% 处的颜色
                  },
                ],
                globalCoord: false, // 缺省为 false
              },
            },
            itemStyle: {
              show:false,
              color: colorList[i]?.[0] || defaultColor,
              borderWidth: 'w(1)',
              borderColor: colorList[i]?.[0] || defaultColor,
            },
            lineStyle: {
              width: 'w(6)',
              color: colorList[i]?.[0] || defaultColor,
              shadowColor: colorList[i]?.[3] || defaultColor,
              shadowBlur: 'w(9)',
              shadowOffsetY:'w(4)'
            },
            label: {
              show: false,
              // position: "top",
              // color: "#fff",
              // fontSize: 12,
              // fontFamily: "DIN Condensed Bold, DIN Condensed Bold-Bold",
              // backgroundColor: "#00B4B1",
              // padding: [6, 20, 6],
              // borderRadius: 5,
            }
          }
    })

}
export default  (data)=>{
    return {
        legend: {
          show: true,
          right: "5%",
          top: "5%",
          itemWidth: 'w(36)',
          itemHeight: 'w(36)',
          itemGap: 'w(72)',
          icon: 'rect',
          textStyle: {
            color: "#fff",
            fontSize: 'w(36)',
            padding: [0, 0, 0, 'w(9)']
          },
          itemStyle: {
              // borderColor: 'rgba(255,255,255,0.4800)',
              // borderWidth: 1
          }
        },
        // dataZoom: {
        //     zoomLock: true,
        //     moveOnMouseWheel: false,
        //     moveOnMouseMove: false,
        //     start: 0, //默认为0
        //     end: 75,
        //     type: "slider",
        //     show: true,
        //     brushSelect: false,
        //     xAxisIndex: [0],
        //     handleSize: 0, //滑动条的 左右2个滑动条的大小
        //     height: 7, //组件高度
        //     left: 20, //左边的距离
        //     right: 20, //右边的距离
        //     bottom: 5, //底部的距离
        //     backgroundColor: "rgba(56, 68, 115, 0.6)",
        //     borderColor: "rgba(56, 68, 115, 0.6)",
        //     realtime: true,
        //     showDataShadow: false, //是否显示数据阴影 默认auto
        //     showDetail: false, //即拖拽时候是否显示详细数值信息 默认true
        //     filterMode: "filter",
        //     fillerColor: "#54678B",
        // },
    
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(130,174,255,0.2)",
          borderWidth: 0,
          className: "tooltip-back-bar",
          textStyle: {
            color: " #E8F3FF",
            fontSize: 'w(36)',
            fontFamily: 'Source Han Sans CN-Bold, Source Han Sans CN',
            fontWeight:'bold'
          },
        },
        // tooltip: {
        //     //悬浮框
        //     trigger: "axis",
        //     backgroundColor: "rgba(43, 62, 122, 0.5)",
        //     className: "tooltip-back-bar",
        //     borderWidth: 0,
        //     textStyle: {
        //         color: "#BBEBFF",
        //         fontSize: (38 * document.body.clientWidth) / 7680,
        //     },
        // },
        grid: {
          bottom: '11%',
          left: '10%',
          top: '20%',
          right: '3%'
        },
        color: ["#3279DF", "#D57A5C"],
        xAxis: {
          data: data.xAxis.data,
          interval: 0,
          offset: 'w(5)',
          axisLine: {
            lineStyle: {
              color: "rgba(97, 124, 219, 0.28)",
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#BBEBFF",
            fontSize: 'w(36)',
            // padding: [0, 0, 0, 0],
            rotate: 0,
          },
        },
        yAxis: {
          offset: 'w(5)',
          name: "",
          // minInterval: 1,
          nameTextStyle: {
            // padding: [0, 0],
            color: '#D1FAFF',
            fontSize: 'w(36)',
            padding: [0, 0, 0, 'w(-28)']
          },
          axisLabel: {
            // verticalAlign: "bottom",
            // padding: [0, -10],
            formatter: (value) => {
              return value;
            },
            align: "right",
            color: "#D1FAFF",
            fontSize: 'w(36)',
          },
          axisLine: {
            lineStyle: {
                color: "#D1FAFF ",
                opacity: 0.3,
            },
          },
          splitLine: {
            lineStyle: {
              color: ["rgba(126, 126, 126, 1)"],
              type: "dashed",
            },
          },
          // axisTick: {
          //     show: true,
          //     length :30,
          //     lineStyle:{
          //         color: "#465899",
          //     }
          // },
        },
        series: getSeriesData(data.series),
    }
}

//各种配置的表格
import { deepClone, deepMerge } from "./toolUtils";
import * as echarts from 'echarts'

import rateBg from '../images/rate-bg.png'
//柱状测试
export const bar = {
    default:()=>{
        const option = {
            color: ['#D2935A', '#3E64B9', '#0CA6BF'],
            legend: {
              show: false,
              right: "3%",
              // top: "1%",
              itemWidth: screenComputed(36),
              itemHeight: screenComputed(36),
              itemGap: screenComputed(24),
              icon: 'rect',
              textStyle: {
                color: "#fff",
                fontSize: screenComputed(14),
                padding: [0, 0, 0, screenComputed(5)]
              },
              itemStyle: {
                  borderColor: 'rgba(255,255,255,0.4800)',
                  borderWidth: 0
              }
            },
            tooltip: {
              trigger: "axis",
              backgroundColor: "rgba(130,174,255,0.2)",
              borderWidth: 0,
              className: "tooltip-back-bar",
              textStyle: {
                color: " #E8F3FF",
                align: "left",
                fontSize: screenComputed(12)
              },
            },
            grid: {left: '3%',
                    top: '15%',
                    right: '3%', bottom: '12%', },
            dataZoom: {
              show: false,
              handleSize: 0,
              height: '4',
              type: 'slider',
              zoomLock: true,
              brushSelect: false,
              filterMode: 'filter',
              fillerColor: 'rgba(187, 235, 255, .2)',
              backgroundColor: 'rgba(187, 235, 255, .08)',
              borderColor: 'rgba(56, 68, 115, 0.6)',
              realtime: true,
              right: 0,
              left: 0,
              bottom: 0,
              width: '100%',
              showDataShadow: false,
              showDetail: false,
              start: 0,
            },
            yAxis: {
              offset: screenComputed(20),
              type: 'value',
              // axisLabel: {
              //   // verticalAlign: "bottom",
              //   // padding: [0, -10],
              //   // formatter: (value) => {
              //   //   return value;
              //   // },
              //   align: "right",
              //   color: "#D1FAFF",
              //   fontSize: screenComputed(12),
              // },
              splitLine: {
                  lineStyle: {
                      color: ["rgba(230,247,255,0.2)"],
                      type: "dashed",
                      // dashOffset:5
                  },
              },
              axisTick: {show: false},
              // axisLabel: {
              //     formatter: function(value) {
              //         return (value + '\n\n');
              //     },
              //     color: '#BBEBFF',
              //     showMinLabel: true
              // },
              axisLabel: {
                // formatter: function (value) {
                //   return (unitConverter(value));
                // },
                align: "right",
                color: "#E6F7FF",
                fontSize: screenComputed(12),
                //verticalAlign: "bottom",
                //padding: [2, 8],
              },
              nameTextStyle: {
                // padding: [0, 0],
                color: '#D1FAFF',
                fontSize: screenComputed(12),
                // align: 'left',
                padding: [0, 0, 0, -screenComputed(28)]
              },
            },
            xAxis: {
              offset: screenComputed(5),
              show: true,
              type: 'category',
              axisLine: {show: false},
              axisTick: {show: false},
              axisLabel: {
                color: "#fff",
                fontSize:screenComputed(12),
                // interval: 10
              },
            },
            series: []
          }
          return option
    }
}
//折线
export class Line{
    constructor(){
        //基本配置文件，使用时拷贝到个性化配置
        this.baseOptions = {
            legend: {
              show: false,
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
              bottom: '20%',
              left: '10%',
              top: '20%',
              right: '3%'
            },
            color: ["#3279DF", "#D57A5C"],
            xAxis: {
              data: [],
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
            series: [],
        }
    }
    //基础配置
    base(options){
        try{
            const baseOptions = deepClone(this.baseOptions)
            baseOptions.grid = {
                ...baseOptions.grid,
                bottom:'11%'
            }
            baseOptions.legend = {
                ...baseOptions.legend,
                show: true,
            }
            //自定义配置
            const newOptions =  deepMerge(baseOptions,options)
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
            newOptions.series.forEach((v, i) => {
                let obj = {
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
                };
                v = deepMerge(v,obj)
              });
            return newOptions
        
        }catch(e){
            console.warn(e)
        }


       //修改其中的配置项
    }
    customLight(){
        const cloneOptions =  deepClone(this.baseOptions)
        //修改其中的配置项
    }
    //个性化图表配置
}

//饼图
export class Pie{
  constructor(){
    this.baseOptions = {
      legend: {
        itemWidth: 'w(30)',
        itemHeight: 'w(30)',
        borderRadius: 'w(6)',
        icon: 'roundRect',
        top: '25%',
        left: '37%',
        height: 'w(220)',
        width: '100%',
        orient: 'vertical',
        align: 'auto',
        itemGap: 'h(48)',
        textStyle: {
          fontSize: 'w(36)',
          color: '#C3CED5',
          fontFamily:
            'font-family: Source Han Sans CN-Regular, Source Han Sans CN',
          rich: {
            name: {
              verticalAlign: 'right',
              align: 'left',
              width: 'w(190)',
              fontSize: 'w(35)',
              color: '#C3CED5',
            },
            value: {
              align: 'left',
              width: 'w(128)',
              fontSize: 'w(35)',
              color: '#AFCFFF',
            },
            count: {
              align: 'left',
              width: 'w(55)',
              fontSize: 'w(35)',
            },
            rate: {
              align: 'left',
              // fontSize: 12,
              color: '#AFCFFF',
            },
          },
        },
        data: [],
        // formatter: function (name) {
        //   let total = 0
        //   let tarValue
        //   for (var i = 0; i < data?.length; i++) {
        //     total += data?.[i]?.value
        //     if (name === data?.[i]?.name) {
        //       tarValue = data?.[i]?.value
        //     }
        //   }
  
        //   let p = Math.round((tarValue / total) * 100)
        //   return '{name| ' + name + '}' + '{value|      ' + tarValue + '}'
        // },
      },
      tooltip: {
        // trigger: "axis",
        backgroundColor: 'rgba(130,174,255,0.2)',
        borderWidth: 0,
        className: 'tooltip-back-bar',
        textStyle: {
          color: ' #E8F3FF',
          fontSize: 'w(32)',
          fontFamily: 'Source Han Sans CN-Bold, Source Han Sans CN',
          fontWeight: 'bold',
        },
        formatter: function (params) {
          if (params.seriesName == 1 || params.seriesName == 2) {
            return params.marker + params.name + '：' + params.value
          }
        },
      },
      title: {
        show: false,
        text: '75.53%',
        left: 'center',
        top: '32%',
        textStyle: {
          textAlign: 'center',
          color: '#ffffff',
          fontSize: 'w(14)',
          fontWeight: 600,
        },
      },
  
      series: [
        {
          name: '1',
          type: 'pie',
          center: ['17%', '50%'],
          radius: ['h(176)', 'h(194)'],
          avoidLabelOverlap: true,
          // color:['rgba(254, 225, 134, 1)','rgba(95, 213, 236, 1)','rgba(189, 219, 255, 1)','rgba(83, 240, 146, 1)','rgba(54, 134, 255, 1)'],
          label: {
            show: false,
          },
          itemStyle: {
            color: (params) => {
              let colorList = [
                '#FEE186',
                '#5FD5EC',
                '#BDDBFF',
                '#3686FF',
                '#5FECB9',
                '#DEBDFF',
              ]
              return colorList[params.dataIndex]
            },
            // borderRadius: 0,
            // borderColor: '#fff',
            // borderWidth: 5
          },
          emphasis: {
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: [],
        },
        {
          // tooltip:{
          //   show:false
          // },
          name: '2',
          type: 'pie',
          center: ['17%', '50%'],
          radius: ['h(154)', 'h(176)'],
          avoidLabelOverlap: true,
          labelLayout: {
            hideOverlap: false,
          },
          label: {
            show: false,
          },
          itemStyle: {
            color: (params) => {
              let colorList = [
                'RGBA(66, 75, 90, 1)',
                'RGBA(34, 73, 110, 1)',
                'RGBA(53, 74, 114, 1)',
                'RGBA(53, 74, 114, 1)',
                'RGBA(26, 57, 114, 1)',
                'RGBA(53, 74, 114, 1)',
              ]
              return colorList[params.dataIndex]
            },
          },
          emphasis: {
            disabled: true,
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: [],
        },
        {
          name: '3',
          type: 'pie',
          center: ['17%', '50%'],
          radius: ['h(102)', 'h(112)'],
          avoidLabelOverlap: true,
          labelLayout: {
            hideOverlap: false,
          },
          label: {
            show: true,
            position: 'inside',
            formatter: function (d) {
              return parseFloat(d.percent).toFixed(0) + '%'
            },
            color: '#C3CED5',
            fontSize: 'w(36)',
          },
          itemStyle: {
            color: 'rgba(19, 38, 79, 0)',
          },
          emphasis: {
            disabled: true,
            label: {
              show: false,
            },
          },
          labelLine: {
            show: false,
          },
          data: [],
        },
      ],
    }
  }
  //多环形饼图
  multiRingPie(options){
    const baseOptions =  deepClone(this.baseOptions)
    //自定义配置
    const data = options.data||[]
    baseOptions.series.map(item=>item.data = data)
    baseOptions.legend.data = data.map((item) => item.name)
    baseOptions.legend.formatter= function (name) {
      let total = 0
      let tarValue
      for (var i = 0; i < data?.length; i++) {
        total += data?.[i]?.value
        if (name === data?.[i]?.name) {
          tarValue = data?.[i]?.value
        }
      }

      let p = Math.round((tarValue / total) * 100)
      return '{name| ' + name + '}' + '{value|      ' + tarValue + '}'
    }
    return baseOptions
    
  }
  ringPie(options){
    const baseOptions =  deepClone(this.baseOptions)
    //自定义配置
    const data = options.data||[]
    baseOptions.series = [{
      name: '1',
      type: 'pie',
      center: ['28%', '50%'],
      radius: ['h(130)', 'h(200)'],
      avoidLabelOverlap: true,
      // color:['rgba(254, 225, 134, 1)','rgba(95, 213, 236, 1)','rgba(189, 219, 255, 1)','rgba(83, 240, 146, 1)','rgba(54, 134, 255, 1)'],
      label: {
        show: false,
      },
      itemStyle: {
        color: (params) => {
          let colorList = ['#5f92f7', '#a1fbb8', '#f7dd74']
          return colorList[params.dataIndex]
        },
        // borderRadius: 0,
        // borderColor: '#fff',
        // borderWidth: 5
      },
      emphasis: {
        label: {
          show: false,
        },
      },
      labelLine: {
        show: false,
      },
      data: data,
    }]
    baseOptions.legend = {
      ...baseOptions.legend,
      top: '25%',
			right: '5%',
      data: data.map((item) => item.name),
      formatter:function (name) {
        let total = 0
        let tarValue
        for (var i = 0; i < data?.length; i++) {
          total += data?.[i]?.value
          if (name === data?.[i]?.name) {
            tarValue = data?.[i]?.value
          }
        }
  
        let p = Math.round((tarValue / total) * 100)
        return '{name| ' + name + '}' + '{value|      ' + tarValue + '}'
      },
      textStyle:{
        ...baseOptions.legend.textStyle,
        rich: {
					name: {
						verticalAlign: 'right',
						align: 'left',
						width: 'w(150)',
						fontSize: 'w(35)',
						color: '#C3CED5',
					},
					value: {
						align: 'left',
						width: 'w(128)',
						fontSize: 'w(35)',
						color: '#AFCFFF',
					},
					count: {
						align: 'left',
						width: 'w(55)',
						fontSize: 'w(35)',
					},
					rate: {
						align: 'left',
						// fontSize: 12,
						color: '#AFCFFF',
					},
				},
      }
    }
    delete baseOptions.legend.left
    console.log('baseOptions',baseOptions)
    return baseOptions
    
  } 
}

// 仪表盘
export class Gauge{
  constructor(){
    this.baseOptions = {
      legend: {
        show: false,
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
      graphic: {
        type: 'image',
        style: {
          image: rateBg,
          x: 0,
          y: 0,
          width: 'w(498)',
          height: 'w(498)',
          originX: 'w(249)',
          originY: 'w(249)'
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
        bottom: '20%',
        left: '10%',
        top: '20%',
        right: '3%'
      },
      color: ["#3279DF", "#D57A5C"],
      xAxis: {
        data: [],
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
      series: [{
        type: "gauge",
        // symbolSize: screenComputed(15),
        // lineStyle: {
        //   width: screenComputed(6),
        // },
        center: ['50%', '42%'],
        radius: '64%',
        // startAngle: 80,   
        // endAngle: 0,
        // clockwise: false,
        // max: 0,
        detail: {
          show:false,
        },
        title: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        pointer: {
          show: false
        },
        axisLine: {
          show:false,
          // lineStyle: {
          //   color: [[1, 'rgba(217, 217, 217, 0.3)']],
            // width: (7 * document.body.clientHeight) / 996
          // },
        },
        progress: {
          show: true,
          width: 'w(20)',
          itemStyle: {
            color: {
              x: 1,
              y: 1,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 1,
                color: '#52DBFB', // 0% 处的颜色
              },
                {
                  offset: 0.75,
                  color: '#448BFF', // 100% 处的颜色
                },
                {
                  offset: 0.5,
                  color: '#FFA88D', // 100% 处的颜色
                },
                {
                  offset: 0.25,
                  color: '#F3B20B', // 100% 处的颜色
                },
                {
                  offset: 0,
                  color: '#F3410A', // 100% 处的颜色
                },
              ],
              globalCoord: false, // 缺省为 false
            },
          }
        },
      }],
    }
  }
  //图片背景的仪表
  imageGauge(options){
    const baseOptions = deepClone(this.baseOptions)
    //自定义配置
    // const newOptions =  deepMerge(baseOptions,options)
    // console.log(newOptions)
    baseOptions.series[0].data = options.series[0].data
    return baseOptions
  }
}
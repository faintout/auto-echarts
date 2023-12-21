const defaultColor = {
  areaStyle:[
    'rgba(56, 122, 236, 1)',
    'rgba(80, 173, 251, 0)'
  ],
  //圆点边框颜色
  itemStyleColor:'#397CED',
  lineStyle:[
    '#387AEC',
    '#50ADFB'
  ]
}
const getDataZoom = (dataZoomShow) => {
    const dataZoom =  {
        "show": dataZoomShow,
        "handleSize": 0,
        "height": 'w(8)',
        "type": "slider",
        "zoomLock": true,
        "brushSelect": false,
        "filterMode": "filter",
        "fillerColor": "rgba(144, 147, 153, .3)",
        "backgroundColor": "rgba(56, 68, 115, 0.6)",
        "borderColor": "rgba(56, 68, 115, 0.6)",
        "realtime": true,
        // "right": 20,
        "left": 'w(45)',
        "bottom": 0,
        "width": "100%",
        "showDataShadow": false,
        "showDetail": false,
        "start": 0,
        "moveOnMouseWheel": false,
        "moveOnMouseMove": false,
        // "end": 'w(70)',
        "xAxisIndex": [
            0
        ]
    }
    if(dataZoomShow){
        dataZoom.end = 'w(70)'
    }
    return dataZoom
}
export default  (data = {})=>{
  const { color = defaultColor,yAxisName } = data
    return {
      "tooltip": {
          "trigger": "axis",
          "backgroundColor": "rgba(130,174,255,0.2)",
          "borderWidth": 0,
          "className": "tooltip-back-bar",
          "textStyle": {
              "color": " #E8F3FF",
              "fontSize": 'w(12)',
              "fontFamily": "Source Han Sans CN-Bold, Source Han Sans CN",
              "fontWeight": "bold"
          },
          "axisPointer": {
              "lineStyle": {
                  "type": "solid",
                  "color": "rgba(54, 134, 255, 1)"
              }
          }
      },
      "grid": {
        "left": "w(45)",
        "top": "10%",
        "right": "0",
        "bottom": data.xaxis.length>18?"11%":'8%'
    },
      "xAxis": {
          "data": data?.xaxis||[],
          // "interval": 0,
          "offset": 'w(4)',
          "axisLine": {
              "show": false
          },
          "axisTick": {
              "show": false
          },
          "axisLabel": {
              "color": "#6B85BCFF",
              "fontSize": 'w(12)',
              "rotate": 0,
              "fontFamily": "PingFang SC-Regular"
          }
      },
      "yAxis": {
          "offset": 'w(4)',
          "name": yAxisName||"辆",
          "nameTextStyle": {
              "color": "rgba(224,224,224,0.5)",
              "fontSize": 'w(12)',
              "padding": [
                  0,
                  0,
                  0,
                  'w(-37)'
              ],
              "align": "left"
          },
          "axisLabel": {
              "align": "left",
              "color": "#6B85BCFF",
              "fontSize": 'w(12)',
              "fontFamily": "PingFang SC-Regular",
              "padding": [
                0,
                'w(-30)'
            ]
          },
          "axisLine": {
              "lineStyle": {
                  "color": "red ",
                  "opacity": 0.3
              }
          },
          "splitLine": {
            "lineStyle": {
              "color": "#26427EFF",
              "type": "dashed"
          }
          },
          "scale": true
      },
      dataZoom:getDataZoom(data.xaxis.length>18),
      "series": [
          {
              "type": "line",
              "name": "",
              "data": data?.data?.[0]?.data||[],
              "yAxisIndex": 0,
              "symbolSize": 'w(7)',
              "smooth": true,
              "areaStyle": {
                  opacity: 0.2,
                  "color": {
                      "x": 0,
                      "y": 0,
                      "x2": 0,
                      "y2": 1,
                      "colorStops": [
                          {
                              "offset": 0,
                              "color": color.areaStyle?.[0]
                          },
                          {
                              "offset": 1,
                              "color": color.areaStyle?.[1]||color.areaStyle?.[0]
                          }
                      ],
                      "globalCoord": false
                  }
              },
              "itemStyle": {
                  "show": true,
                  "color": color.itemStyleColor,
                  "borderWidth": 'w(1)',
                  "borderColor": "#223C75"
              },
              "lineStyle": {
                  "width": 'w(2)',
                  "color": {
                    "x": 0,
                    "y": 0,
                    "x2": 1,
                    "y2": 1,
                    "colorStops": [
                        {
                            "offset": 0,
                            "color": color.lineStyle?.[0]
                        },
                        {
                            "offset": 1,
                            "color": color.lineStyle?.[1]||color.areaStyle?.[0]
                        }
                    ],
                    "globalCoord": false
                },
                  // "shadowColor": "green",
                  // "shadowBlur": 8.934375,
                  // "shadowOffsetY": 3.970833333333333
              },
              "label": {
                  "show": false
              },
              "symbol": "emptyCircle"
          }
      ],
  }
}
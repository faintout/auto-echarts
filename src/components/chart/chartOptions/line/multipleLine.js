
const getSeriesData = (series)=>{
    return series.map(data=>{
        return {
            ...data,
            "type": "line",
            "yAxisIndex": 0,
            "symbolSize": 'w(7)',
            "smooth": true,
            // "itemStyle": {
            //     "show": true,
            //     "color": '#397CED',
            //     "borderWidth": 'w(1)',
            //     "borderColor": "#223C75"
            // },
            "label": {
                "show": false
            },
            "symbol": "emptyCircle"
        }
    })
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
  const { color,yAxisName } = data
    return {
       legend: {
           show: true,
           right: "0%",
           top: "0%",
           itemWidth: 'w(12)',
           itemHeight: 'w(8)',
           itemGap: 'w(16)',
        //    icon: 'rect',
           textStyle: {
               color: "#A5ADBA",
               fontSize: 'w(12)',
               padding: [0, 0, 0, 'w(8)']
           },
           itemStyle: {
               // borderColor: 'rgba(255,255,255,0.4800)',
               // borderWidth: 1
           },
           inactiveColor:'rgba(165, 173, 186, .6)'
       },
       color,
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
              "fontSize": 'w(14)',
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
      "series": getSeriesData(data.data),
  }
}
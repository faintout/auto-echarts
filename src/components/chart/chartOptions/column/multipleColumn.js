const getSeriesData = (data,barWidth = 16) => {
    return data.map(item => {
        return {
            ...item,
            "barGap": "50%",
            "itemStyle": {
                "borderRadius": 0
            },
            "type": "bar",
            "barWidth": `w(${barWidth})`
        }
    })
}
const getColorData = (colorList) => {
    return colorList.map(color => {
        return {
            "colorStops": [{
                    "offset": 0,
                    "color": color?.[0]
                },
                {
                    "offset": 1,
                    "color": color?.[1] || color?.[0]
                }
            ],
            "x": 0,
            "y": 0,
            "x2": 1,
            "y2": 1,
            "type": "linear",
            "global": false
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
export default (data = {}) => {
    const {
        color,yAxisName,dataZoomShow
    } = data 
    return {
        legend: {
            show: true,
            right: "0%",
            top: "0%",
            itemWidth: 'w(8)',
            itemHeight: 'w(8)',
            itemGap: 'w(16)',
            icon: 'roundRect',
            textStyle: {
                color: "#A5ADBA",
                fontSize: 'w(12)',
                padding: [0, 0, 0, 'w(8)']
            },
            itemStyle: {
                // borderColor: 'rgba(255,255,255,0.4800)',
                // borderWidth: 1
            },
            inactiveColor:'rgba(165, 173, 186, .8)'
        },
        "color": getColorData(color),
        "tooltip": {
            "trigger": "axis",
            "backgroundColor": "rgba(130,174,255,0.2)",
            "borderWidth": 0,
            "className": "tooltip-back-bar",
            "textStyle": {
                "color": " #E8F3FF",
                "align": "left",
                "fontSize": 'w(12)',
            },
            "axisPointer": {
                type: 'shadow',
                "lineStyle": {
                    "type": "solid",
                    "color": "rgba(54, 134, 255, 1)"
                },
                shadowStyle: {
                    opacity: 0.5,
                    color: {
                        "colorStops": [{
                                "offset": 0,
                                "color": "#213B73FF"
                            },
                            {
                                "offset": 1,
                                "color": "#213B7333"
                            }
                        ],
                        "x": 0,
                        "y": 0,
                        "x2": 1,
                        "y2": 1,
                        "type": "linear",
                        "global": false
                    },
                }
            },
        },

        "grid": {
            "left": "w(45)",
            "top": "12%",
            "right": "0",
            "bottom": data.xaxis.length>18?"11%":'8%'
        },
        "yAxis": {
            "offset": 'w(5)',
            "type": "value",
            "splitLine": {
                "lineStyle": {
                    "color": "#26427EFF",
                    "type": "dashed"
                }
            },
            "axisTick": {
                "show": false
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
            "name": yAxisName||"辆",
            // "scale": true
        },
        "xAxis": {
            "offset": 'w(0)',
            "show": true,
            "type": "category",
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#26427EFF",
                    "type": "dashed"
                }
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "color": "#6B85BCFF",
                "fontSize": 'w(12)',
                "fontFamily": "PingFang SC-Regular",
            },
            "data": data.xaxis
        },
        dataZoom:getDataZoom(data.xaxis.length>18),
        "series": getSeriesData(data.data,data.barWidth)
    }
}
const colorList = [
    '#1555c2',
    '#4b98fa',
    '#a3d1ff',
    '#ffd653',
    '#fef1a3',
    '#fefce6',
    '#1ecc99',
    '#6be5b9',
    '#99f3ce',
    '#6456e2',
    '#b1a1ff',
    '#58d7db',
]
// 间隔 圆环图
const getSeresData = (data,total,selected) => {
    //设置默认selected
    const defaultSelected = {}
    data.map(item=>defaultSelected[item.name]=true)
    selected = { ...defaultSelected, ...selected };
    //获取选中的个数
    let selectedCount = Object.values(selected).filter(Boolean).length;
    //设置默认值
    const newData = []
    data.map((item) => {
        newData.push(item)
        //在选中的数据大于1的情况下添加空白间隔
        if(selected[item.name]&&selectedCount>1){
            newData.push({
                "value": total*0.015,
                "name": ""
            })
        }
    })
    return newData
}

const getSeriesColor = (data)=>{
    let colorIndex = 0; // 用于跟踪colorList中的颜色位置
    const resultColors = data.map(item => {
        if (item.name) {
            // 如果name不为空，使用当前颜色并增加索引
            return colorList[colorIndex++];
        } else {
            // 如果name为空，返回透明色
            return 'rgba(0,0,0,0)';
        }
    });
    return resultColors
}
const getTitleName = (titleName,total,lengthDetailShow) => {
    const graphic =  {
        elements: [
            {
                type: 'text',
                "left": lengthDetailShow?"11%":"19%",
                "top": "42%",
                style: {
                    text: total,
                    width:'w(120)',
                    overflow:'truncate',
                    fontFamily:'DIN Alternate-Bold',
                    textAlign: 'center',
                    fill: '#E6EAF0 ',
                    fontSize: 'w(32)'
                },
            },
            {
                type: 'text',
                "left": lengthDetailShow?"11%":"19%",
                "top": "57%",
                style: {
                    text: titleName,
                    fontFamily:'FZLanTingHeiS-DB-GB-Re',
                    width:'w(120)',
                    overflow:'truncate',
                    textAlign: 'center',
                    fill: '#A5ADBA ',
                    fontSize: 'w(14)'
                },
            }
        ]
    }
    return titleName?graphic:{elements:[]}
}
export const legendSelectChanged = (chartRef,event)=>{
    const {data} = chartRef.getOption()

    // 计算总值,只计算被勾选的数据
    const total = data.reduce((sum, item) => {
        // 如果select中对应的name为true，则累加它的value
        if (event.selected[item.name]) {
            return sum + item.value;
        }
        return sum;
    }, 0); // 初始值为0
    // 获取新的series数据
    const newData = getSeresData(data,total,event.selected)
    // 获取新的颜色
    const seriesColor = getSeriesColor(newData)
    // 缓存颜色函数以避免重复定义
    const colorFunction = params => seriesColor[params.dataIndex];
    //更新数据
    chartRef.setOption({
        series: [{
            data: newData,
            "itemStyle": {
                color: colorFunction,
            },
        },{
            data: newData,
            "itemStyle": {
                color: colorFunction,
            },
        }]
    });
}
/**
 * 图表参数配置
 *
 * @param {Object} data - 图表所需数据
 * @param {Object} config - 图表的配置项
 * @param {string} config.titleName -图表中心的文字信息
 * @param {boolean} [config.lengthDetailShow] - 图例是否展示详细信息
 * @param {boolean} [config.isLegendNumClick] - 图例数字是否可点击(用来判断修改颜色)
 * @returns {ChartOptions} 返回图表配置
 */
export default (data = [],config = {}) => {
    const total = data.reduce((total, item) => {
        return total + item.value
    }, 0)
    const {titleName,lengthDetailShow,isLegendNumClick} = config
    return  {
        data,
        "legend": {
            // selectedMode:false,
            type: 'scroll',
            itemWidth: 'w(10)',
            itemHeight: 'w(10)',
            borderRadius: 'w(2)',
            icon: 'roundRect',
            y: 'center', // 图例垂直居上
            left: lengthDetailShow?'50%':'58%',
            height: data.length>=9?'90%':'100%',
            width: '100%',
            orient: 'vertical',
            align: 'auto',
            itemGap: 'h(21)',
            textStyle: {
              fontSize: 'w(14)',
              color: '#C3CED5',
              fontFamily:
                'font-family: Source Han Sans CN-Regular, Source Han Sans CN',
              rich: {
                name: {
                  verticalAlign: 'right',
                  align: 'left',
                  width: 'w(80)',
                  height: 'h(20)',
                  fontSize: 'w(14)',
                  color: '#C3CED5',
                },
                value: {
                  align: 'left',
                  color: isLegendNumClick?'#4B98FA':'#C3CED5',
                  fontSize: 'w(14)',
                },
                rate: {
                  align: 'left',
                  width: 'w(50)',
                  fontSize: 'w(14)',
                  color: '#C3CED5',
                },
              },
            },
            pageTextStyle:{
                color:'#C3CED5'
            },
            pageButtonItemGap: 'w(20)',
            pageButtonGap:'w(10)',
            pageButtonPosition: 'end', // 按钮在图例的末尾位置，即底部
            pageIcons: {
                vertical: [
                    'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjI4OyYjMTg2OyYjMTY0OyYjMjI4OyYjMTg3OyYjMTUyOyYjMjMyOyYjMTc1OyYjMTgwOyYjMjMwOyYjMTUyOyYjMTQyOyI+CjxnIGlkPSJpY29uLSYjMjI4OyYjMTg0OyYjMTM5OyYjMjMwOyYjMTM5OyYjMTM3OyYjMjI5OyYjMTc3OyYjMTQ5OyYjMjI5OyYjMTg4OyYjMTI4OyYjMjI5OyYjMTY0OyYjMTM1OyYjMjI4OyYjMTg3OyYjMTg5OyA1Ij4KPHJlY3QgeD0iMTYiIHk9IjE2IiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHJ4PSIyIiB0cmFuc2Zvcm09InJvdGF0ZSgtMTgwIDE2IDE2KSIgc3Ryb2tlPSIjMjY0MjdFIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIvPgo8ZyBpZD0iaWNvbi0mIzIyODsmIzE4NDsmIzEzOTsmIzIzMDsmIzEzOTsmIzEzNzsmIzIyOTsmIzE3NzsmIzE0OTsmIzIyOTsmIzE4ODsmIzEyODsiPgo8cmVjdCBpZD0iJiMyMzE7JiMxNTk7JiMxNjk7JiMyMjk7JiMxODk7JiMxNjI7IiBvcGFjaXR5PSIwLjAxIiB4PSIxNiIgeT0iMTYiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdHJhbnNmb3JtPSJyb3RhdGUoLTE4MCAxNiAxNikiIGZpbGw9IiM3NTdEOEIiLz4KPHBhdGggaWQ9IiYjMjMyOyYjMTgzOyYjMTc1OyYjMjI5OyYjMTkwOyYjMTMyOyIgZD0iTTExLjA1NjcgMTAuNTI2NEw4IDcuNDY5N0w0Ljk0MzMzIDEwLjUyNjRMNCA5LjU4MzAzTDggNS41ODMwM0wxMiA5LjU4MzAzTDExLjA1NjcgMTAuNTI2NFoiIGZpbGw9IiNBNUJCRkEiLz4KPC9nPgo8L2c+CjwvZz4KPC9zdmc+Cg==',
                    'image://data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgaWQ9IiYjMjI4OyYjMTg2OyYjMTY0OyYjMjI4OyYjMTg3OyYjMTUyOyYjMjMyOyYjMTc1OyYjMTgwOyYjMjMwOyYjMTUyOyYjMTQyOyI+CjxnIGlkPSJpY29uLSYjMjI4OyYjMTg0OyYjMTM5OyYjMjMwOyYjMTM5OyYjMTM3OyYjMjI5OyYjMTc3OyYjMTQ5OyYjMjI5OyYjMTg4OyYjMTI4OyYjMjI5OyYjMTY0OyYjMTM1OyYjMjI4OyYjMTg3OyYjMTg5OyA0Ij4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiByeD0iMiIgc3Ryb2tlPSIjMjY0MjdFIiBzdHJva2UtbWl0ZXJsaW1pdD0iMCIgc3Ryb2tlLWxpbmVqb2luPSJiZXZlbCIvPgo8ZyBpZD0iaWNvbi0mIzIyODsmIzE4NDsmIzEzOTsmIzIzMDsmIzEzOTsmIzEzNzsmIzIyOTsmIzE3NzsmIzE0OTsmIzIyOTsmIzE4ODsmIzEyODsiPgo8cmVjdCBpZD0iJiMyMzE7JiMxNTk7JiMxNjk7JiMyMjk7JiMxODk7JiMxNjI7IiBvcGFjaXR5PSIwLjAxIiB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9IiM3NTdEOEIiLz4KPHBhdGggaWQ9IiYjMjMyOyYjMTgzOyYjMTc1OyYjMjI5OyYjMTkwOyYjMTMyOyIgZD0iTTQuOTQzMzMgNS40NzM2M0w4IDguNTMwM0wxMS4wNTY3IDUuNDczNjNMMTIgNi40MTY5N0w4IDEwLjQxN0w0IDYuNDE2OTdMNC45NDMzMyA1LjQ3MzYzWiIgZmlsbD0iI0E1QkJGQSIvPgo8L2c+CjwvZz4KPC9nPgo8L3N2Zz4=',
                ]
            },

            data: data.map((item) => item.name),
            formatter: function (name) {
              let tarValue
              for (var i = 0; i < data?.length; i++) {
                if (name === data?.[i]?.name) {
                  tarValue = data?.[i]?.value
                }
              }
      
              let p = Math.round((tarValue / total) * 100)
              const detail = '{rate|      ' + p+'%' + '}' + '{value|      ' + tarValue + '}'
              return '{name| ' + name + '}' + (lengthDetailShow?detail:'')
            },
          },
          "tooltip": {
            // "trigger": "axis",
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
        graphic: getTitleName(titleName,total,lengthDetailShow),
        "series": [{
                "name": "",
                "type": "pie",
                "center": [
                    lengthDetailShow?"22%":"30%",
                    "50%"
                ],
                "radius": [
                    'w(85)',
                    'w(95)'
                ],
                tooltip:{
                    show:true,
                    formatter: function (params) {
                        if(params.name){
                            return params.marker + params.name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + params.value
                        }
                    }
                },
                "avoidLabelOverlap": true,
                "label": {
                    "show": false
                },
                "itemStyle": {
                    color: params=>{
                        const seriesData = getSeresData(data,total)
                        const seriesColor = getSeriesColor(seriesData)
                        return seriesColor[params.dataIndex]
                    }
                    // color: (params) => {
                    //     const newColorList = []
                    //     colorList.map(color=>{
                    //         newColorList.push(color,'rgba(0,0,0,0)')
                    //     })
                    //     return newColorList[params.dataIndex]
                    // },
                    // borderRadius: 0,
                    // borderColor: '#fff',
                    // borderWidth: 5
                    // borderWidth: 5, // 设置环形图的间隔宽度
                    // borderColor: '#13264f' // 设置间隔颜色为透明
                },
                "emphasis": {
                    "label": {
                        "show": false
                    }
                },
                "labelLine": {
                    "show": false
                },
                "data": getSeresData(data,total)
            },
            {
                "name": "",
                "type": "pie",
                "center": [
                    lengthDetailShow?"22%":"30%",
                    "50%"
                ],

                "radius": [
                    'w(65)',
                    'w(85)'
                ],
                "avoidLabelOverlap": true,
                "labelLayout": {
                    "hideOverlap": false
                },
                "label": {
                    "show": false
                },
                tooltip:{
                    show:true,
                    formatter: function (params) {
                        if(params.name){
                            return params.marker + params.name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + params.value
                        }
                    }
                },
                "itemStyle": {
                    // color: (params) => {
                    //     const newColorList = []
                    //     colorList.map(color=>{
                    //         colorList.map(color=>{
                    //             newColorList.push(color,'rgba(0,0,0,0)')
                    //         })
                    //     })
                    //     return newColorList[params.dataIndex]
                    // },
                    color: params=>{
                        const seriesData = getSeresData(data,total)
                        const seriesColor = getSeriesColor(seriesData)
                        return seriesColor[params.dataIndex]
                    },
                    opacity: 0.1,
                    // borderWidth: 5, // 设置环形图的间隔宽度
                    // borderColor: '#13264f' // 设置间隔颜色为透明
                },
                "emphasis": {
                    "disabled": true,
                    "label": {
                        "show": false
                    }
                },
                "labelLine": {
                    "show": false
                },
                "data": getSeresData(data,total)
            }
        ]
    }
}
export default (data) => {
    return {
        "color": [
            "rgba(54, 134, 255, 1)",
            "rgba(83, 240, 146, 1)",
            "rgba(238, 111, 124, 1)",
            "rgba(95, 213, 236, 1)"
        ],
        "title": {
            "text": ""
        },
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
        "legend": {
            type: 'scroll',
            itemWidth: 'w(10)',
            itemHeight: 'w(10)',
            borderRadius: 'w(2)',
            icon: 'roundRect',
            y: 'center', // 图例垂直居上
            left: '70%',
            height: '100%',
            width: '100%',
            orient: 'vertical',
            align: 'auto',
            itemGap: 'h(24)',
            textStyle: {
              fontSize: 'w(14)',
              color: '#C3CED5',
              fontFamily:
                'font-family: Source Han Sans CN-Regular, Source Han Sans CN',
            },
          },
        "radar": [
            {
                "indicator": [
                    {
                        "text": "20-24"
                    },
                    {
                        "text": "16-20"
                    },
                    {
                        "text": "12-16"
                    },
                    {
                        "text": "8-12"
                    },
                    {
                        "text": "4-8"
                    },
                    {
                        "text": "0-4"
                    }
                ],
                "center": [
                    "30%",
                    "50%"
                ],
                "radius": 'w(105)',
                "splitNumber": 'w(4)',
                "axisName": {
                    "formatter": "{value}",
                    "color": "rgba(255,255,255,0.85)",
                    "height": 'h(10)',
                    "padding": [
                        0,
                        0,
                        'w(-9)',
                        0
                    ]
                },
                "splitArea": {
                    "areaStyle": {
                        "color": [
                            "RGBA(31, 49, 88, .4)",
                            "RGBA(31, 49, 88, .6)",
                            "RGBA(42, 59, 96, .7)",
                            "RGBA(31, 49, 88, .8)"
                        ],
                        "shadowColor": "rgba(0, 0, 0, 0.2)",
                        "shadowBlur": 'w(10)'
                    }
                },
                "axisLine": {
                    "lineStyle": {
                        "color": "RGBA(43, 61, 97, 1)"
                    }
                },
                "splitLine": {
                    "lineStyle": {
                        "color": "RGBA(43, 61, 97, 1)"
                    }
                }
            }
        ],
        "series": [
            {
                "type": "radar",
                "emphasis": {
                    "lineStyle": {
                        "width": 'w(4)'
                    }
                },
                "symbolSize": 0,
                "data": [
                    {
                        "value": [
                            200,
                            210,
                            110,
                            240,
                            120,
                            210
                        ],
                        "name": "小型车",
                        "areaStyle": {
                            "color": "rgba(54, 134, 255, .2)"
                        }
                    },
                    {
                        "value": [
                            60,
                            null,
                            80,
                            100,
                            150,
                            120,
                            190
                        ],
                        "name": "公交车",
                        "areaStyle": {
                            "color": "rgba(83, 240, 146, .2)"
                        }
                    },
                    {
                        "value": [
                            20,
                            35,
                            50,
                            100,
                            60,
                            80
                        ],
                        "name": "渣土车",
                        "areaStyle": {
                            "color": "rgba(238, 111, 124, .2)"
                        }
                    },
                    {
                        "value": [
                            140,
                            75,
                            10,
                            100,
                            150,
                            200
                        ],
                        "name": "大型车-其他",
                        "areaStyle": {
                            "color": "rgba(95, 213, 236, .2)"
                        }
                    }
                ],
                "tooltip": {
                    "trigger": "item"
                }
            }
        ]
    }
}
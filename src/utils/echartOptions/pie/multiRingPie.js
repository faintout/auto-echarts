export default (data)=>{
    return {
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
          data: data.map((item) => item.name),
          formatter: function (name) {
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
            data: data,
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
            data: data,
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
            data: data,
          },
        ],
      }
}
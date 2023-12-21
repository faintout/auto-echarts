const getDataMax = (data) => {
  let max = 0
  data.forEach(item => {
      if (item > max) {
          max = item
      }
  })
  var percentage = 0.85; // 85% expressed as a decimal
  var newMax = max / percentage;
  return newMax
}
export default (data = []) => {
  return {
      chart: {
          polar: true,
          backgroundColor: 'rgba(0,0,0,0)',

          //   plotBackgroundColor:'RGBA(28, 56, 97, 1)'
      },
      accessibility: {
        enabled: false
      },
      title: {
          text: '',
      },
      credits: 'disable',
      pane: {
          startAngle: 0,
          endAngle: 360,
          size: '100%',
          background: [{
              // 第一层背景，内圈到 85%
              backgroundColor: '#14376b',
              borderWidth: 0,
              innerRadius: '0%',
              outerRadius: '85%'
          }, {
              // 第二层背景，外圈 85% 到 100%
              backgroundColor: '#19468f', // 替换为你想要的颜色代码
              borderWidth: 0,
              innerRadius: '85%',
              outerRadius: '100%'
          }]
      },
      legend: {
          enabled: false,
      },
      tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(130,174,255,0.2)',
          borderWidth: 0,
          borderRadius: 'w(8)',
          shadow: false,
          useHTML: true,
          shared: true,
          className: 'tooltip-back-bar',
          style: {
              color: '#E8F3FF',
              fontSize: 'w(14)',
          },
          formatter: function() {
              var s = '<b>' + this.x + '</b>';
              // 遍历所有点来构建tooltip内容
              this.points.forEach(function(point) {
                  // 获取当前系列中所有点的总和
                  var seriesTotal = point.series.data.reduce(function(sum, point) {
                      return sum + point.y;
                  }, 0);
                  // 计算当前点的百分比
                  var percentage = ((point.y / seriesTotal) * 100).toFixed(2);
                  s += '<br/><span style="color:' + point.series.color + '">\u25CF</span> ' + point.series.name + ': <b>' +
                       point.y + ' (' + percentage + '%)</b>';
              });
  
              return s;
          }
          // headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
          // pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y}</b></span><br/>',
          // formatter: function() {
          //     // 计算百分比
          //     var total = this.series.yData.reduce(function(sum, value) {
          //         return sum + value;
          //     }, 0);
          //     var percentage = (this.y / total * 100).toFixed(2); // 保留两位小数
  
          //     // 返回自定义的提示框内容
          //     return '<span style="color:' + this.series.color + '">' +
          //            this.series.name + ': <b>' + this.y + '</b> (' + percentage + '%)</span><br/>';
          // },
          // positioner: function(labelWidth, labelHeight, point) {
          //     // 计算提示框的位置，使其显示在极地图的外圈
          //     return {
          //         x: point.plotX - labelWidth / 2,
          //         y: point.plotY - labelHeight - 20 // 20是提示框与点的距离
          //     };
          // }
          //   formatter: function () {
          //     let textColor = '#E8F3FF'
          //     let result = '<span style="font-size:'+'w(14)' +'px;color: '+textColor+';font-weight:bold;">'+this.x+'-'+ (this.x == '24'?'1':(Number(this.x)+1)) +'</span>'+ "</br>"
          //     let marker = '<span style="display:inline-block;vertical-align:middle;margin-right:'+'w(10)' +'px;border-radius:'+'w(10)' +'px;width:'+'w(10)' +'px;height:'+'w(10)' +'px;background-color:'+this.color+';"></span>'
          //      result +=  marker +  '<span style="display:inline-block;vertical-align:middle;font-size:'+'w(14)' +'px;color: '+textColor+';font-weight:bold;margin-left:2px">'+(Number(this.y)/1 * 100).toFixed(2)+'%' +'</span>' 
          //      return result

          //         }
      },
      xAxis: {
          tickInterval: 1,
          // min: 0,
          // max: 23,
          // categories:state.hourlyFlowAnalysisData.xAxis.data,
          gridLineColor: 'rgba(182, 200, 209, 0.30)',
          backgroundColor: 'rgba(2,20,30,1)',
          lineColor: 'rgba(182, 200, 209, 0.30)',
          labels: {
              align: 'center',
              distance: 'w(-12)',
              style: {
                  color: '#C3CED5',
                  fontFamily: 'Roboto-Regular',
                  fontSize: 'w(12)'
              },
          },
          tickColor: '#C3CED5',
          tickLength: 'w(3)',
          tickPosition: 'inside',
          tickWidth: 'w(1)',
      },
      yAxis: {
          min: 0,
          max: getDataMax(data),
          gridLineWidth: '0',
          lineColor: '',
          labels: {
              enabled: false
          }
      },
      plotOptions: {
          series: {
              pointStart: 0,
              pointInterval: 1,
              // threshold:400,
              negativeColor: 'rgba(95, 213, 236, 1)',
              states: {
                  hover: {
                      // 设置悬停时的颜色
                      color: '#6edb84'
                  }
              },
              // 开启鼠标悬停效果
              enableMouseTracking: true
          },
          column: {
              pointPadding: 0,
              groupPadding: 0
          }
      },
      series: [{
          type: 'column',
          name: '流量',
          cursor: 'pointer',
          data: data,
          dataLabels: {
              enabled: false,
              color: 'red',
              inside: true,
              verticalAlign: 'center',
              // padding:10,
              // y:100
          },
          pointPlacement: 'between',
          // color:'rgba(123, 225, 136, 1)'
          color: '#3dc3cc'
      }]
  }
}
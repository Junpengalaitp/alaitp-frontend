//柱状图配置
const barOption = {
  backgroundColor: 'transparent',
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['门禁进入', '门禁外出'],
      align: 'left',
      top: 18,
      right: 20,
      textStyle: {
          color: "#c1c5cd"
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 12
  },
  grid: {
      top: '24%',
      left: '3%',
      right: '3%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: [{
      type: 'category',
      data: [
          '1号楼',
          '2号楼',
          '3号楼',
          '4号楼',
          '5号楼',
          '6号楼',
          '7号楼',
          '8号楼',
      ],
      axisLine: {
          show: true,
          lineStyle: {
              color: "#45647f",
              width: 1,
              type: "solid"
          }
      },
      axisTick: {
          show: false,
      },
      axisLabel: {
          show: true,
          textStyle: {
              color: "#a1d8f1",
          }
      },
  }],
  yAxis: [{
      type: 'value',
      axisTick: {
          show: false,
      },
      axisLine: {
          show: true,
          lineStyle: {
              color: "#45647f",
              width: 1,
              type: "solid"
          },
      },
      splitLine: {
          show: false
      },
      axisLabel: {
          show: true,
          textStyle: {
              color: '#a1d8f1',
              fontSize: '12px'
          }
      }

  }],
  series: [{
      name: '门禁进入',
      type: 'bar',
      data: [20, 50, 80, 58, 83, 68, 57, 100],
      barWidth: 8, //柱子宽度
      // barGap: 1, //柱子之间间距
      itemStyle: {
          color: '#14e3cc'
      }
  }, {
      name: '门禁外出',
      type: 'bar',
      data: [50, 70, 60, 61, 75, 87, 60, 62],
      barWidth: 8,
      // barGap: 1,
      itemStyle: {
          color: '#f84f55'
      }
  }]
}

export default barOption;
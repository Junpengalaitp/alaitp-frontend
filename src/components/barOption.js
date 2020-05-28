const barOption = {
    title: {
        text: 'Programming Language',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.05]
    },
    yAxis: {
        type: 'category',
        data: ['Python', 'Java', 'JavaScript', 'Ruby', 'C#']
    },
    series: [
        {
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744]
        }
    ]
}

export default barOption;
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions/actionTypes"
 
class KeywordChart extends React.Component {
  constructor(props) {
    super(props)
    this.echartsReact = React.createRef()
    this.state = {
      title: {
        text: props.category,
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
    }
  }

  getYAxisData = () => {
    if (this.props.chartOption[this.props.category]) {
      return this.props.chartOption[this.props.category].yAxisData
    } else {
      return []
    }
  }

  getXAxisData = () => {
    if (this.props.chartOption[this.props.category]) {
      return this.props.chartOption[this.props.category].xAxisData
    } else {
      return []
    }
  }

  getChartOption = () => {
    const XYData = {
      yAxis: {
        type: 'category',
        data: this.getYAxisData()
      },
      series: [
        {
          type: 'bar',
          data: this.getXAxisData()
        }
      ]
    }
    return {...this.state, ...XYData}
  }

  render() {
    // if (this.props.update) {
    //   this.props.chartUpdateSuccess()
    //   console.log("after chartUpdateSuccess")
    //   this.echartsReact.getEchartsInstance().setOption(this.props.chartOption)
    // }
    
    return (
      <div>
          <ReactEcharts
            ref={e => { this.echartsReact = e }}
            option={this.getChartOption()} >
          </ReactEcharts>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chartOption: state.chartOption
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chartUpdateSuccess: () => dispatch({ type: actionTypes.CHART_UPDATE_SUCCESS} ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordChart)
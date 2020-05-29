import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from "react-redux"

import * as actionTypes from "../store/actions/actionTypes"
 
 
class KeywordChart extends React.Component {
  constructor(props) {
    super(props)
    this.echartsReact = React.createRef()
}

  getOption = () => {
    return this.props.chartOption
  }

  onChartover() {
    this.echartsReact.getEchartsInstance().setOption(this.echartsReact.props.option)
        console.log(this.echartsReact.getEchartsInstance())

    }

  render () {
    const onEvents = {
      'mouseover': this.onChartover.bind(this)
  }
    return (
      <div>
          <ReactEcharts
            ref={(e) => { this.echartsReact = e }}
            onEvents={onEvents}
            option={this.getOption()} >
          </ReactEcharts>
      </div>
    )
  }

}

// const updateWsKeywords = () => {
//   return {
//     type: actionTypes.WS_MESSAGE
//   }
// }

const mapStateToProps = state => {
  return {
    chartOption: state.chartOption.option,
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onReceivedJobKeyword: () => dispatch(updateWsKeywords()),
//   }
// }

export default connect(mapStateToProps)(KeywordChart)
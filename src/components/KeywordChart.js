import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions/actionTypes"
 
class KeywordChart extends React.Component {
  constructor(props) {
    super(props)
    this.echartsReact = React.createRef()
  }

  render () {
    if (this.props.update) {
      this.props.chartUpdateSuccess()
      console.log("after chartUpdateSuccess")
      this.echartsReact.getEchartsInstance().setOption(this.props.chartOption)
    }
    
    return (
      <div>
          <ReactEcharts
            ref={(e) => { this.echartsReact = e }}
            option={this.props.chartOption} >
          </ReactEcharts>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chartOption: state.chartOption,
    update: state.update
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chartUpdateSuccess: () => dispatch({ type: actionTypes.CHART_UPDATE_SUCCESS} ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordChart)
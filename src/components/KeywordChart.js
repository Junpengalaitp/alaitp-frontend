import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions/actionTypes"
import { Modal, Button } from 'react-bootstrap'
import CoOccurredWords from './Keywords/CoOccurredWord/CoOccurredWords';

const MyVerticallyCenteredModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Most correlated technologies with {props.keyword}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <CoOccurredWords keyword={props.keyword}/>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const staticChartOptions = {
  color: ['#3398DB'],
  grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
  },
  xAxis: {
    type: 'value',
    boundaryGap: [0, 0.1],
  },
}

class KeywordChart extends React.Component {
  state = {
    title: {text: this.props.category},
    yAxis: {type: 'category', data: []},
    series: [{type: 'bar', data: []}],
    ...staticChartOptions,
    modalShow: false,
    keyword: "",
  }

  echartsReact = React.createRef()
  
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
        ...this.state.yAxis,
        axisLabel: {
          inside: true,
          textStyle: {
              color: '#fff'
          }
        },
        axisTick: {
          show: false
        },
        axisLine: {
            show: false
        },
        z: 10,
        data: this.getYAxisData()
      },
      series: [
        {
          type: 'bar',
          label: {
            normal: {
                position: 'right',
                show: true
            }
          },
          data: this.getXAxisData()
        }
      ]
    }
    return {...this.state, ...XYData}
  }

  closeModal = () => {
    this.setState({modalShow: false})
  }

  openModal = () => {
    this.setState({modalShow: true})
  }

  onclick = {
    'click': this.clickKeywordBar.bind(this)
  }
  clickKeywordBar(e) {
    console.log(e)
    this.setState({keyword: e.name})
    this.openModal()
  }

  render() {
    return (
      <div>
          <ReactEcharts
            ref={e => { this.echartsReact = e }}
            option={this.getChartOption()} 
            onEvents={this.onclick}>
          </ReactEcharts>
          <MyVerticallyCenteredModal 
            show={this.state.modalShow}
            onHide={() => this.closeModal(false)}
            keyword={this.state.keyword} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    chartOption: state.jobKeyword.chartData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    chartUpdateSuccess: () => dispatch({ type: actionTypes.CHART_UPDATE_SUCCESS} ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KeywordChart)
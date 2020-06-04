import React from 'react';
import ReactEcharts from 'echarts-for-react';
import { connect } from "react-redux"
import * as actionTypes from "../store/actions/actionTypes"
import { Modal, Button } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

class KeywordChart extends React.Component {
  state = {
    title: {
      text: this.props.category,
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
      boundaryGap: [0, 0.05],
    },
    yAxis: {
      type: 'category',
      data: []
    },
    series: [
      {
        type: 'bar',
        data: []
      }
    ],
    modalShow: false
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
    this.openModal()
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
            option={this.getChartOption()} 
            onEvents={this.onclick}>
          </ReactEcharts>
          <MyVerticallyCenteredModal 
            show={this.state.modalShow}
            onHide={() => this.closeModal(false)}/>
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
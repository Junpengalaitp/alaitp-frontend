import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {connect} from "react-redux"
import {MyVerticallyCenteredModal} from "../../UI/Modal";
import {categoryMinBarLength} from "../../../constant/constant"
import {i18nText} from "../../../containers/i18n/i18nText";

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
};

class KeywordChart extends React.Component {
  state = {
    ...staticChartOptions,
    yAxis: {type: 'category', data: []},
    series: [{type: 'bar', data: []}],
    modalShow: false,
    keyword: "",
  };

  echartsReact = React.createRef();
  
  getYAxisData = () => {
    if (this.props.chartOption[this.props.category]) {
      return this.props.chartOption[this.props.category].yAxisData
    } else {
      return []
    }
  };

  getXAxisData = () => {
    if (this.props.chartOption[this.props.category]) {
      return this.props.chartOption[this.props.category].xAxisData
    } else {
      return []
    }
  };

  getChartOption = () => {
    const XYData = {
      title: {text: i18nText(this.props.category, this.props.language)},
      barText: i18nText("barText", this.props.language),
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        },
        formatter: params => {
          const keyword = params[0].axisValue;
          return XYData.barText + keyword;
        }
      },
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
          data: this.getXAxisData(),
          barMinHeight: categoryMinBarLength[this.props.category]
        }
      ]
    };
    return {...this.state, ...XYData}
  };

  closeModal = () => {
    this.setState({modalShow: false})
  };

  openModal = () => {
    this.setState({modalShow: true})
  };

  onclick = {
    'click': this.clickKeywordBar.bind(this)
  };

  clickKeywordBar(e) {
    console.log(e);
    this.setState({keyword: e.name});
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
    chartOption: state.jobKeyword.chartData,
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(KeywordChart)
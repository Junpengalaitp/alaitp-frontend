import React from 'react';
import ReactEcharts from 'echarts-for-react';
 
import barOption from './barOption';
 
 
const KeywordChart = ()=>{
  return (
    <div>
        <ReactEcharts
          option={barOption}
        />
    </div>
  )
}
 
export default KeywordChart;
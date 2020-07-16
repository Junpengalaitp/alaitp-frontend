import React from 'react';
import KeywordChart from "./KeywordChart";
import {combinedCategories} from "../../../constant/constant";

/**
 * the charts that not showing if the 'see more' button is not clicked
 */
const HidingCharts = props => {
  const categoryList = combinedCategories.split(",");
  let charts = <div/>;
  if (!props.hiding) {
    charts = (
      <div>
        {categoryList.slice(5).map((category, index) => (
          <KeywordChart category={category} categoryText={category} key={index}/>
        ))}
      </div>
    );
  }
  return charts;
}



export default HidingCharts;
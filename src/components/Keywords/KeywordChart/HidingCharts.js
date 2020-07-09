import React from 'react';
import KeywordChart from "./KeywordChart";
import {combinedCategories} from "../../../config";

/**
 * the charts that not showing if the 'see more' button is not clicked
 */
const HidingCharts = props => {
  const categoryList = combinedCategories.split(",");
  if (!props.hiding) {
    return (
      <div>
        {categoryList.slice(5).map((category, index) => (
          <KeywordChart category={category} key={index}/>
        ))}
      </div>
    );
  } else {
    return <div/>
  }
}

export default HidingCharts;
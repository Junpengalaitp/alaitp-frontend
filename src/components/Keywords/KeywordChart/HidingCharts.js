import React from 'react';
import KeywordChart from "./KeywordChart";
import {combinedCategories} from "../../../config";

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
    return <div></div>
  }
}

export default HidingCharts;
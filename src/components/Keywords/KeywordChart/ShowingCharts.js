import React from 'react';
import KeywordChart from "./KeywordChart";
import {combinedCategories} from "../../../config";

const ShowingCharts = () => {
  const categoryList = combinedCategories.split(",");
  return (
    <div>
      {categoryList.slice(0, 5).map((category, index) => (
        <KeywordChart category={category} key={index}/>
      ))}
    </div>
  );
}

export default ShowingCharts;
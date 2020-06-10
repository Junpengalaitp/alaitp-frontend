import React from 'react';
import {combinedCategories} from "../../config";
import KeywordChart from "./KeywordChart";

const KeywordCharts = () => {
  return (
    <div>
      <h3>The Most Wanted Skills in Search Result (Click to See Correlated skills)</h3>
      {combinedCategories.split(",").map((category, index) => (
        <KeywordChart category={category} key={index}/>
      ))}
    </div>
  );
}

export default KeywordCharts;
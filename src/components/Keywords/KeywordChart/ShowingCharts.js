import React from 'react';
import KeywordChart from "./KeywordChart";
import {combinedCategories} from "../../../constant/constant";
import {connect} from "react-redux";
import {i18nText} from "../../../containers/i18n/i18nText";

/**
 * the charts that is showing when 'see more' button is not clicked
 */
const ShowingCharts = props => {
  const categoryList = combinedCategories.split(",");
  return (
    <div>
      {categoryList.slice(0, 5).map((category, index) => (
        <KeywordChart category={category} categoryText={i18nText(category, props.language)} key={index}/>
      ))}
    </div>
  );
}
const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};


export default connect(mapStateToProps)(ShowingCharts);
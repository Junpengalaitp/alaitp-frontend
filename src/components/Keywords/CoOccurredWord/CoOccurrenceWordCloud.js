import React, {useEffect, useState} from 'react'
import {TagCloud} from 'react-tagcloud'
import {ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap'
import {categoryMap, nonTechnicalCategoryMap, technicalCategoryMap} from "../../../constant/constant";
import {i18nText} from "../../../constant/i18nText";
import {connect} from "react-redux";

/**
 * use third party library react-tagcloud for rendering correlated words
 */
const CoOccurrenceWordCloud = props => {
  const [cloudValues, setCloudValues] = useState([]);

  useEffect(() => {
    const values = [];
    if (props.coOccurredWords) {
      for (let [key, value] of Object.entries(props.coOccurredWords)) {
        values.push({value: key, count: value.count})
      }
    }
      setCloudValues(values)
  }, [props.coOccurredWords]);

  const setCategoryWords = category => {
    props.selectCategory(category);
    const values = [];
    for (let [key, value] of Object.entries(props.coOccurredWords)) {
      values.push({value: key, count: value.count})
    }
    setCloudValues(values.slice(0, -1))
  };

  /**
   * word cloud technical category selection button
   */
  const technicalCategoryButtons = Object.keys(technicalCategoryMap).map((category, idx) => (
    <Dropdown.Item eventKey={idx} key={idx} flip={true} onClick={() => setCategoryWords(category)}>
      {i18nText(technicalCategoryMap[category], props.language)}
    </Dropdown.Item>
  ));

  /**
   * word cloud non-technical category selection button
   */
  const nonTechnicalCategoryButtons = Object.keys(nonTechnicalCategoryMap).map((category, idx) => (
    <Dropdown.Item eventKey={idx} key={idx} flip={true} onClick={() => setCategoryWords(category)}>
      {i18nText(nonTechnicalCategoryMap[category], props.language)}
    </Dropdown.Item>
  ));

  return (
    <div className="container">
      <div>
        <ButtonGroup>
          <DropdownButton className="cloudCategoryButton" as={ButtonGroup} size={"sm"}
                          title={i18nText("cloudTechnicalCategoryButton", props.language)} variant="light" drop="right"
                          id="bg-nested-dropdown">
            {technicalCategoryButtons}
          </DropdownButton>
        </ButtonGroup>
        <ButtonGroup>
          <DropdownButton className="cloudCategoryButton" as={ButtonGroup} size={"sm"}
                          title={i18nText("cloudNonTechnicalCategoryButton", props.language)} variant="light" drop="right"
                          id="bg-nested-dropdown">
            {nonTechnicalCategoryButtons}
          </DropdownButton>
        </ButtonGroup>
      </div>
      <TagCloud
        minSize={20} // min word size in cloud
        maxSize={60} // max word size in cloud
        tags={cloudValues}
        style={{width: 600}}
        className="simple-cloud"
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    language: state.i18n.language
  }
};

export default connect(mapStateToProps)(CoOccurrenceWordCloud)
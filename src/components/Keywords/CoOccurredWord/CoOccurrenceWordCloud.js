import React, {useEffect, useState} from 'react'
import {TagCloud} from 'react-tagcloud'
import {ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap'
import {categoryMap} from "../../../constant/constant";
import {i18nText} from "../../../containers/i18n/i18nText";
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

  const categoryButtons = Object.keys(categoryMap).map((key, idx) => (
    <Dropdown.Item eventKey={idx} key={idx} onClick={() => setCategoryWords(key)}>{categoryMap[key]}</Dropdown.Item>
  ));

  return (
    <div className="container">
      <div>
        <ButtonGroup vertical={false}>
          <DropdownButton className="cloudCategoryButton" as={ButtonGroup}
                          title={i18nText("cloudCategoryButton", props.language)} variant="light" drop="right"
                          id="bg-nested-dropdown">
            {categoryButtons}
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
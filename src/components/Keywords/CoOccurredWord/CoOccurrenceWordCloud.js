import React, {useEffect, useState} from 'react'
import {TagCloud} from 'react-tagcloud'
import {ButtonGroup, Dropdown, DropdownButton} from 'react-bootstrap'

const categoryMap = {pl: "programming language", ol: "other language", lb: "library", fw: "framework", cs: "computer science", ai: "artificial intelligence", pt: "protocol",
                     ds: "data storage", dt: "data transmission", dv: "division", ps: "position", we: "work experience", os_: "operating system", sv: "server", ap: "approach", 
                     se: "software engineering", pf: "platform", ge: "general", sf: "soft skills", tl: "tool", at: "architect", pd: "product", ql: "quality", of: "offer", tm: "team", cp: "company"};

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
          <DropdownButton as={ButtonGroup} title="select category" variant="light" drop="right" id="bg-nested-dropdown">
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

export default CoOccurrenceWordCloud
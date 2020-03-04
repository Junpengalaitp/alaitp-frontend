import React, { Component } from 'react'
import { ButtonToolbar, SplitButton } from 'react-bootstrap';
import { Dropdown } from 'react-bootstrap';

class WordCategories extends Component {
  render() {
    const type = "radio"
    const categoryList = ['pl', 'ol', 'lb', 'fw', 'cs', 'ai', 'pt', 'ds', 'dt', 'dv', 'ps', 'we', 'os', 'sv', 'ap', 'se', 'pf', 'ge', 'sf', 'tl', 'at', 'pd', 'ql', 'of', 'tm', 'cp']
    const categoryMap = {pl: "programming language", ol: "other language", lb: "library", fw: "framework", cs: "computer science", ai: "artificial intelligence", pt: "protocol",
                         ds: "data storage", dt: "data transmission", dv: "division", ps: "position", we: "work experience", os_: "operating system", sv: "server", ap: "approach", 
                         se: "software engineering", pf: "platform", ge: "general", sf: "soft skills", tl: "tool", at: "architect", pd: "product", ql: "quality", of: "offer", tm: "team", cp: "company"}

    return (
    <ButtonToolbar>
      <SplitButton
        drop={"right"}
        variant="secondary"
        title={"select category"}
        id={`dropdown-button-drop-${"right"}`}
        key={"right"}
      >
        {categoryList.map(category => (
          <Dropdown.Item eventKey={`inline-${type}-${category}`} key={`inline-${type}-${category}`}>{categoryMap[category]}</Dropdown.Item>
        ))}
      </SplitButton>
    </ButtonToolbar>
    )
  }
}


export default WordCategories
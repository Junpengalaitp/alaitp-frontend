import React, { useState, useEffect } from 'react'
import { TagCloud } from 'react-tagcloud'
import { Container, ButtonGroup, DropdownButton, Dropdown } from 'react-bootstrap'

const categoryMap = {pl: "programming language", ol: "other language", lb: "library", fw: "framework", cs: "computer science", ai: "artificial intelligence", pt: "protocol",
                         ds: "data storage", dt: "data transmission", dv: "division", ps: "position", we: "work experience", os_: "operating system", sv: "server", ap: "approach", 
                         se: "software engineering", pf: "platform", ge: "general", sf: "soft skills", tl: "tool", at: "architect", pd: "product", ql: "quality", of: "offer", tm: "team", cp: "company"}


const CoOccurrenceWordCloud = props => {
  const [minSize, setMinSize] = useState(12)
  const [maxSize, setMaxSize] = useState(35)
  const [cloudValues, setCloudValues] = useState([])
  const [randomColor, setRandomColor] = useState(true)
  const [shuffle, setShuffle] = useState(true)

  useEffect(() => {
    const values = []
    for (let [key, value] of Object.entries(props.coOccurredWords)) {
      values.push({value: key, count: value.count})
    }
    setCloudValues(values.slice(0, -1))
  }, [props.coOccurredWords]);

  const setCategoryWords = category => {
    props.selectCategory(category)
    const values = []
    for (let [key, value] of Object.entries(props.coOccurredWords)) {
      values.push({value: key, count: value.count})
    }
    setCloudValues(values.slice(0, -1))
  }

  const categoryButtons = Object.keys(categoryMap).map((key, idx) => (
    <Dropdown.Item eventKey={idx} key={idx} onClick={() => setCategoryWords(key)}>{categoryMap[key]}</Dropdown.Item>
    // <button onClick={() => setCategoryWords(key)} key={idx}>{categoryMap[key]}</button>
  ))

  const CoOccurrenceWordCloud = (
      <div>
        <div>
          <ButtonGroup vertical={false}>
            <DropdownButton as={ButtonGroup} title="select category" variant="light" drop="right" id="bg-nested-dropdown">
              {categoryButtons}
            </DropdownButton>
          </ButtonGroup>
        </div>
        <TagCloud
          minSize={12}
          maxSize={35}
          tags={cloudValues}
          style={{ width: 250 }}
          shuffle={shuffle}
          disableRandomColor={!randomColor}
          className="simple-cloud"
          // onClick={tag => {
          //   const value = prompt('Edit tag value', tag.value)
          //   if (value == null) {
          //     return
          //   }
          //   const newTag = { value, count: tag.count }
          //   const newData = cloudValues.map(t => {
          //     if (t.value === tag.value) {
          //       return newTag
          //     }
          //     return t
          //   })
          //   cloudValues = newData
          // }}
        />
      </div>
    )
  return <Container>{CoOccurrenceWordCloud}</Container>
}

export default CoOccurrenceWordCloud
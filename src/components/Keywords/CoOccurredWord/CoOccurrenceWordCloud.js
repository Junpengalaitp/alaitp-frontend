import React, { useState } from 'react'
import { TagCloud } from 'react-tagcloud'
import Spinner from './../../UI/Spinner/Spinner'
import { Container } from 'react-bootstrap'

// const defaultData = [
//   { value: 'jQuery', count: 25 },
//   { value: 'MongoDB', count: 18 },
//   { value: 'JavaScript', count: 38 },
//   { value: 'React', count: 30 },
//   { value: 'Nodejs', count: 28 },
//   { value: 'Express.js', count: 25 },
//   { value: 'HTML5', count: 33 },
//   { value: 'CSS3', count: 20 },
//   { value: 'Webpack', count: 22 },
//   { value: 'Babel.js', count: 7 },
//   { value: 'ECMAScript', count: 25 },
//   { value: 'Jest', count: 15 },
//   { value: 'Mocha', count: 17 },
//   { value: 'React Native', count: 27 },
//   { value: 'Angular.js', count: 30 },
//   { value: 'TypeScript', count: 15 },
//   { value: 'Flow', count: 30 },
//   { value: 'NPM', count: 11 },
// ]

const CoOccurrenceWordCloud = props => {
  const [rendered, setRendered] = useState(false)
  const [minSize, setMinSize] = useState(12)
  const [maxSize, setMaxSize] = useState(35)
  const [cloudValues, setCloudValues] = useState([])
  const [randomColor, setRandomColor] = useState(true)
  const [shuffle, setShuffle] = useState(true)

  const setCategoryWords = () => {
    props.selectCategory()
    const values = []
    for (let [key, value] of Object.entries(props.coOccurredWords)) {
      values.push({value: key, count: value.count})
    }
    setCloudValues(values.slice(0, -1))
  }

  let CoOccurrenceWordCloud = <Spinner />
  if (props.coOccurredWords !== null) {
    // console.log("coOccurredWords of: ", props.keyword, props.coOccurredWords)
    const values = []
    for (let [key, value] of Object.entries(props.coOccurredWords)) {
      values.push({value: key, count: value.count})
    }
    if (!rendered) {
      setCloudValues(values.slice(0, -1))
      setRendered(true)
    }
    
    CoOccurrenceWordCloud = (
      <div>
        <div>
          {/* <button onClick={() => setCloudValues(cloudValues.slice(0, -1))}>Pop</button> */}
          <button onClick={() => setCategoryWords()}>Pop</button>
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
  }
  return <Container>{CoOccurrenceWordCloud}</Container> 
}

export default CoOccurrenceWordCloud
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

const Keywords = () => {

  const [keywords, setKeywords] = useState([])

  useEffect(() => {
    getKeywords()
  }, [])

  const getKeywords = () => {
    Axios.get(`http://127.0.0.1:5000/keywords/remotive`)
      .then(res => {
        console.log(res.data)
        setKeywords(Object.keys(res.data.PROGRAMMING_LANGUAGE))
        console.log(Object.keys(res.data.PROGRAMMING_LANGUAGE))
      })
      .catch(err => console.log(err))
  }

  const keywordsListItems = keywords.map((keyword, index) => 
    <li key={index}>{keyword}</li>)

  return (
    <div>
      <ul>{keywordsListItems}</ul>
    </div>
  )
}

export default Keywords

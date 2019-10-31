import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "./UI/Spinner/Spinner";

const Keywords = props => {
  const [keywords, setKeywords] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKeywords()
  }, []);

  const getKeywords = () => {
      // const source = props.input === null ? 'remotive' : props.input
      Axios.get(`http://127.0.0.1:5000/keywords/remotive`)
      .then(res => {
        console.log(res.data);
        setKeywords(Object.keys(res.data.PROGRAMMING_LANGUAGE));
        setLoading(false);
      })
      .catch(err => console.log(err));
  }

  const keywordsListItems = keywords.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ));

  const searchResult = loading ? <Spinner /> : <ul className="text-center list-unstyled">{keywordsListItems}</ul>
  console.log('show: ' + props.show)
  return <div className='container'>{props.show? searchResult : null}</div>;
};

export default Keywords;

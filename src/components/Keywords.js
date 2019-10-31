import React, { useEffect, useState } from "react";
import Axios from "axios";
import Spinner from "./UI/Spinner/Spinner";

const Keywords = props => {
  const [keywords, setKeywords] = useState({
    programmingLanguage: [],
    libraryOrFramework: [],
    division: [],
    dataStorage: [],
    platform: [],
    approach: []
  });

  // const [keywords, setKeywords] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getKeywords();
  }, []);

  const getKeywords = () => {
    // const source = props.input === null ? 'remotive' : props.input
    Axios.get(`http://127.0.0.1:5000/keywords/remotive`)
      .then(res => {
        console.log(res.data);
        setKeywords({
          programmingLanguage: Object.keys(res.data.PROGRAMMING_LANGUAGE),
          libraryOrFramework: Object.keys(res.data.LIBRARY_OR_FRAMEWORK),
          division: Object.keys(res.data.DIVISION),
          dataStorage: Object.keys(res.data.DATA_STORAGE),
          platform: Object.keys(res.data.PLATFORM),
          approach: Object.keys(res.data.APPROACH)
        });
        setLoading(false);
      })
      .catch(err => console.log(err));
  };

  const programmingLanguagesItems = keywords.programmingLanguage.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const libraryOrFrameworksItems = keywords.libraryOrFramework.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const divisionsItems = keywords.division.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const dataStoragesItems = keywords.dataStorage.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const platformsItems = keywords.platform.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const approachesItems = keywords.approach.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const searchResult = loading ? (
    <Spinner />
  ) : (
    <div className="row">
      <div className="col-sm-2">
        <ul className="text-center list-unstyled">
          <small className='btn btn-info btn-sm'>Programming Language</small>
          {programmingLanguagesItems}
        </ul>
      </div>

      <div className="col-sm-2">
        <ul className="text-center list-unstyled">
          <small className='btn btn-success btn-sm'>Library and Framework</small>
          {libraryOrFrameworksItems}
        </ul>
      </div>

      <div className="col-sm-2">
        <ul className="text-center list-unstyled">
          <small className='btn btn-danger btn-sm'>Division</small>
          {divisionsItems}
        </ul>
      </div>

      <div className="col-sm-2">
        <ul className="text-center list-unstyled">
          <small className='btn btn-warning btn-sm'>Platform</small>
          {platformsItems}
        </ul>
      </div>

      <div className="col-sm-2">
        <ul className="text-center list-unstyled">
          <small className='btn btn-secondary btn-sm'>Approach</small>
          {approachesItems}
        </ul>
      </div>

      <div className="col-sm-2">
        <ul className="text-center list-unstyled">
          <small className='btn btn-dark btn-sm'>Data Storage</small>
          {dataStoragesItems}
        </ul>
      </div>

    </div>
  );

  console.log("show: " + props.show);
  return <div className="container">{props.show ? searchResult : null}</div>;
};

export default Keywords;

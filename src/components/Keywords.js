import React from "react"
import Spinner from "./UI/Spinner/Spinner"
import { connect } from 'react-redux'

const Keywords = props => {
  

  const programmingLanguagesItems = props.keywords === null? null : props.keywords.programmingLanguage.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const libraryOrFrameworksItems = props.keywords === null? null : props.keywords.libraryOrFramework.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const divisionsItems = props.keywords === null? null : props.keywords.division.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const dataStoragesItems = props.keywords === null? null : props.keywords.dataStorage.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const platformsItems = props.keywords === null? null : props.keywords.platform.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const approachesItems = props.keywords === null? null : props.keywords.approach.map((keyword, index) => (
    <li key={index}>{keyword}</li>
  ))

  const searchResult = props.loading ? (
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

const mapStateToProps = state => {
  return {
    loading: state.loading,
    keywords: state.keywords
  };
};


export default connect(mapStateToProps)(Keywords);

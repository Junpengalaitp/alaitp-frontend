import React from "react"
import Spinner from "./UI/Spinner/Spinner"
import { connect } from 'react-redux'

const Keywords = props => {
  

  const programmingLanguagesItems = props.keywords === null? null : props.keywords.programmingLanguage.map((keyword, index) => (
    <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))

  const libraryOrFrameworksItems = props.keywords === null? null : props.keywords.libraryOrFramework.map((keyword, index) => (
    <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))

  const divisionsItems = props.keywords === null? null : props.keywords.division.map((keyword, index) => (
    <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))

  const dataStoragesItems = props.keywords === null? null : props.keywords.dataStorage.map((keyword, index) => (
    <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))

  const platformsItems = props.keywords === null? null : props.keywords.platform.map((keyword, index) => (
    <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))

  const approachesItems = props.keywords === null? null : props.keywords.approach.map((keyword, index) => (
    <a href='/' className="list-group-item list-group-item-primary" key={index}>{keyword}</a>
  ))

  const searchResult = props.loading ? (
    <Spinner />
  ) : (
    <div className="row">
      <div className="col-sm-2">
        <div className="list-group text-center list-unstyled list-group-flush">
          <a href='/' className='list-group-item list-group-item-info'>Programming Language</a>
          {programmingLanguagesItems}
        </div>
      </div>

      <div className="col-sm-2">
        <div className="list-group text-center list-unstyled">
          <a href='/' className='list-group-item list-group-item-success'>Library and Framework</a>
          {libraryOrFrameworksItems}
        </div>
      </div>

      <div className="col-sm-2">
        <div className="list-group text-center list-unstyled">
          <a href='/' className='list-group-item list-group-item-danger'>Division</a>
          {divisionsItems}
        </div>
      </div>

      <div className="col-sm-2">
        <div className="list-group text-center list-unstyled">
          <a href='/' className='list-group-item list-group-item-warning'>Platform</a>
          {platformsItems}
        </div>
      </div>

      <div className="col-sm-2">
        <div className="list-group text-center list-unstyled">
          <a href='/' className='list-group-item list-group-item-light'>Approach</a>
          {approachesItems}
        </div>
      </div>

      <div className="col-sm-2">
        <div className="list-group text-center list-unstyled">
          <a href='/' className='list-group-item list-group-item-dark'>Data Storage</a>
          {dataStoragesItems}
        </div>
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

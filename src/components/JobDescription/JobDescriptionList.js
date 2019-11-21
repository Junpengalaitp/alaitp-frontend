import React from 'react'
import { connect } from 'react-redux'

import JobDescription from './JobDescription'
import Spinner from './../UI/Spinner/Spinner';

class JobDescriptionList extends React.Component {

  render() {
    let searchResult = <Spinner />
    if (!this.props.loading) {
      searchResult = this.props.jobList.slice(0, 6).map(jobDescription => (
        <JobDescription title={jobDescription.jobTitle} company={jobDescription.company} tags={jobDescription.tags} key={jobDescription.jobId} jobDescriptionText={jobDescription.jobDescriptionText} />
      ))
    }

    return (
      <React.Fragment>
        {searchResult}
      </React.Fragment>
  )}
}

const mapStateToProps = state => {
  return {
    jobList: state.jobDescription.jobList,
    loading: state.jobDescription.loading
  }
}

export default connect(mapStateToProps)(JobDescriptionList)

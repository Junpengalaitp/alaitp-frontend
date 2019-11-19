import React from 'react'
import { connect } from 'react-redux'

import JobDescription from './JobDescription';
import { searchJobs } from '../../store/actions/jobSearch';
import Spinner from './../UI/Spinner/Spinner';

class JobDescriptionList extends React.Component {

  componentDidMount() {
    this.props.onKeywordSearchSuccess("Software Engineer")
    console.log(this.props.jobList)
  }

  render() {
    // const searchResult = this.props.loading? <Spinner /> : (
    //   <div>
    //     <JobDescription title={this.props.jobList[0].jobTitle} company={this.props.jobList[0].company} tags={this.props.jobList[0].tags} />
    //     <JobDescription title={this.props.jobList[1].jobTitle} company={this.props.jobList[1].company} tags={this.props.jobList[1].tags}/>
    //     <JobDescription title={this.props.jobList[2].jobTitle} company={this.props.jobList[2].company} tags={this.props.jobList[2].tags}/>
    //     <JobDescription title={this.props.jobList[3].jobTitle} company={this.props.jobList[3].company} tags={this.props.jobList[3].tags}/>
    //     <JobDescription title={this.props.jobList[4].jobTitle} company={this.props.jobList[4].company} tags={this.props.jobList[4].tags}/>
    //     <JobDescription title={this.props.jobList[5].jobTitle} company={this.props.jobList[5].company} tags={this.props.jobList[5].tags}/>
    //   </div>
    //   )
    let searchResult = <Spinner />
    if (!this.props.loading) {
      searchResult = this.props.jobList.slice(0, 6).map(jobDescription => (
        <JobDescription title={jobDescription.jobTitle} company={jobDescription.company} tags={jobDescription.tags} key={jobDescription.jobId} />
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

const mapDispatchToProps = dispatch => {
  return {
    onKeywordSearchSuccess: searchInput => dispatch(searchJobs(searchInput))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JobDescriptionList)

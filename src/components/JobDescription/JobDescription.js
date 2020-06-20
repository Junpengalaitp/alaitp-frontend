import React from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';
import JobDescriptionText from './JobDescriptionText';

class JobDescription extends React.Component {

  state = {
    open: false,
    opened: false
  }
  
  render() {
    const handleOpen = () => {
      this.setState({
        open: !this.state.open,
        opened: true
      })
    }
    const handleNoKeywords = () => {
      console.log("no keyword, set state opened to false")
      this.setState({
        opened: false
      })
    }
    return (
      <Card style={{ width: '49rem' }}>
        <Card.Body>
          <Card.Title className="clearfix">
            <p className="card-title float-left"><strong>{this.props.title}</strong></p>
            <p className="card-text float-right">{this.props.company}</p>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted clearfix">
            <Button
              className="card-title float-left"
              variant="outline-info btn-sm"
              onClick={() => handleOpen()}
              aria-controls="job-collapse-text"
              aria-expanded={this.state.open}
            >See Job Text</Button>
            <p className="card-text float-right">{this.props.tags}</p>
          </Card.Subtitle>
          <Collapse in={this.state.open}>
            <div id="job-collapse-text mx-1">
              <JobDescriptionText jobDescriptionText={this.props.jobDescriptionText} jobId={this.props.jobId} opened={this.state.opened} onNoKeyword={() => handleNoKeywords()} />
            </div>
          </Collapse>
        </Card.Body>
      </Card>
    )
  }
}

export default JobDescription
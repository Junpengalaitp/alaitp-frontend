import React, { useState } from 'react';
import { Button, Collapse, Card, Badge } from 'react-bootstrap';
import JobDescriptionText from './JobDescriptionText';

const JobDescription = props => {
  const [open, setOpen] = useState(false)

  return (
    <Card style={{ width: '49rem' }}>
      <Card.Body>
        <Card.Title className="clearfix">
          <p className="card-title float-left"><strong>{props.title}</strong></p>
          <p className="card-text float-right">{props.company}</p>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted clearfix">
          <Button
            className="card-title float-left"
            variant="outline-info btn-sm"
            onClick={() => setOpen(!open)}
            aria-controls="job-collapse-text"
            aria-expanded={open}
          >See Job Text</Button>
          <p className="card-text float-right">{props.tags}</p>
        </Card.Subtitle>
        <Collapse in={open}>
          <div id="job-collapse-text mx-1">
            <JobDescriptionText jobDescriptionText={props.jobDescriptionText}></JobDescriptionText>
            {/* <Card.Text>I'm <Badge variant="success">highlighted</Badge>!</Card.Text> */}
          </div>
        </Collapse>
        
      </Card.Body>
    </Card>
  )
}

export default JobDescription
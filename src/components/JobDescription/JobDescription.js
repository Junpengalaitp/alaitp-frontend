import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';

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
            <Card.Text>{props.jobDescriptionText}</Card.Text>
          </div>
        </Collapse>
        
      </Card.Body>
    </Card>
  )
}

export default JobDescription
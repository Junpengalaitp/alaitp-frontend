import React, { useState } from 'react';
import { Button, Collapse, Card } from 'react-bootstrap';

const JobDescription = props => {
  const [open, setOpen] = useState(false)

  return (
    <Card style={{ width: '32rem' }}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted clearfix">
          <p className="card-title float-left"><strong>{props.company}</strong></p>
          <p className="card-text float-right">{props.tags}</p>
        </Card.Subtitle>
        <Button
          variant="outline-info btn-sm"
          onClick={() => setOpen(!open)}
          aria-controls="job-collapse-text"
          aria-expanded={open}
        >See Job Text</Button>
        <Card.Text>
          <Collapse in={open}>
            <div id="job-collapse-text mx-1">
              {props.jobDescriptionText}
            </div>
          </Collapse>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default JobDescription
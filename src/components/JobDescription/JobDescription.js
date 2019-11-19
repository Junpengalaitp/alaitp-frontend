import React from 'react'

const JobDescription = props => {
  return (
    <div className="card border-dark mb-1" style={{maxWidth: '32rem'}}>
      <div className="card-header blockquote">{props.title}</div>
      <div className="card-body text-dark clearfix">
        <p className="card-title float-left"><strong>{props.company}</strong></p>
        <p className="card-text float-right">{props.tags}</p>
      </div>
    </div>
  )
}

export default JobDescription
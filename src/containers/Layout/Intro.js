import React from 'react'

export const Intro = () => {
  return (
    <div>
      <div className="jumbotron" style={{"marginTop": "100px", "marginRight": "100px"}}>
        <h1 className="display-4">Hello, world!</h1>
        <p className="lead">This is a project I build for showing my technical skills, a website for searching technical
          jobs and analysis the job description to get the related technical skills for job requirements.
        </p>
        <hr className="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger
            container.</p>
          <a className="btn btn-primary btn-lg" href="/alaitp-frontend" role="button">About Me</a>
      </div>
    </div>
  )
}

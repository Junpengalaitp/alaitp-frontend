import React from 'react'
import { Route } from 'react-router';
import SearchForm from '../SearchForm';

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div className="container">
            <a className="navbar-brand" href='/'>ALAITP</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" className="collapse navbar-collapse">
              <Route path='/keywords' render={(props) => <SearchForm {...props} inputCSS="form-control mr-2" buttonCSS="btn btn-outline-primary" />} />
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className='nav-link' href='/'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='/'>About</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='/'>Services</a>
                    </li>
                    <li className="nav-item">
                        <a className='nav-link' href='/'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

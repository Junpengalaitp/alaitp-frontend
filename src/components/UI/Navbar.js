import React from 'react'

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div class="container">
            <a class="navbar-brand" href='/'>ALAITP</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navbarNav" class="collapse navbar-collapse">
                <form class="form-inline mr-auto">
                  <input type="text" class="form-control mr-2" placeholder="search" />
                  <button class="btn btn-outline-primary">search</button>
                </form>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class='nav-link' href='/'>Home</a>
                    </li>
                    <li class="nav-item">
                        <a class='nav-link' href='/'>About</a>
                    </li>
                    <li class="nav-item">
                        <a class='nav-link' href='/'>Services</a>
                    </li>
                    <li class="nav-item">
                        <a class='nav-link' href='/'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

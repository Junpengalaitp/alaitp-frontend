import React from 'react';

const NavbarSide = () => (
  <nav className="nav flex-column">
    <a className="nav-link active" href="#">Why am I Building this</a>
    <a className="nav-link" href="#">time management</a>
    <a className="nav-link" href="#">workout plan</a>
    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">coding practices</a>
  </nav>
);

export default NavbarSide;
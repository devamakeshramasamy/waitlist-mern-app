import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav  bg="dark" className="navbar navbar-dark navbar-expand-lg">
        <Link to="/dashbord" className="navbar-brand">Dashboard</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/Edit" className="nav-link">Edit</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}
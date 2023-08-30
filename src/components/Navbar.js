import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
      {/* Navigation bar */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><i class="fa-solid fa-book-open-reader"></i> {props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
             {/* Left-side navigation items */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  <i className="fa-duotone fa-plus"></i>{props.add}
                </Link>
              </li>
              <li className="nav-item" >
                <Link className="nav-link" to="/cart">
                <i class="fas fa-shopping-bag"></i>
                </Link>
              </li>
            </ul>
             {/* Right-side navigation items */}
            <ul className="navbar-nav ms-auto"> 
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  <i className="fa-regular fa-user"></i> {props.username}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

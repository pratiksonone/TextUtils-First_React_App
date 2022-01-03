import React from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <div id="logo" className="text-center">
            <p className='text-light'>Text<h className='text-info'>Utils</h></p>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fw-bold " to="/TextUtils-First_React_App">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold" to="/TextUtils-First_React_App/about">About</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" onClick={props.onClick} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.title}</label>
            </div>
          </div>

        </div>
      </nav>
    </>
  );
}

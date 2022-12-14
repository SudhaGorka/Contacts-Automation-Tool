import React from 'react'
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
  return (

    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        {/* Container wrapper */}
        <div className="container">
          {/* Navbar brand */}
          <a className="navbar-brand me-2">
            <img
              src="https://thumbs.dreamstime.com/b/phone-icon-vector-male-user-person-profile-avatar-symbol-business-contact-communication-flat-color-glyph-pictogram-145875101.jpg"
              height={50}
              alt=" Logo"
              loading="lazy"
              style={{ marginTop: "-1px" }}
            />
            <a className='fw-bold fs-3' style={{ fontFamily: 'Sono', color:"#247BA0"   }} height={25}>Quicker</a>
          </a>
          {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          {/* Collapsible wrapper */}
          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            {/* Left links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>

            {/* Left links */}
            <div className="d-flex align-items-center">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item " style={{ fontFamily: 'Lato' }}>
                  <Link className="nav-link me-4  text-black" style={{ fontFamily: 'Inter' }} to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item " style={{ fontFamily: 'Lato' }}>
                  <Link className="nav-link me-4 text-black" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item " style={{ fontFamily: 'Lato' }}>
                  <Link className="nav-link me-4 text-black" to="/learn">
                    Learn
                  </Link>
                </li>
                <li className="nav-item " style={{ fontFamily: 'Lato' }}>
                  <Link className="nav-link me-4 text-black" to="/addcontact">
                    Add Contact
                  </Link>
                </li>
                <li className="nav-item " style={{ fontFamily: 'Lato' }}>
                  <Link className="nav-link me-4 text-black" to="/sheetmanager">
                    Sheet Manager
                  </Link>
                </li>
                <li>

                  <NavLink className="btn btn-dark btn-rounded px-3 me-4 text-white"  style={{ fontFamily: 'Lato' }} to="/login">
                    Login
                  </NavLink>
                </li>
                <li>

                  <NavLink className="btn btn-dark btn-rounded px-3 me-4 text-white"  style={{ fontFamily: 'Lato' }} to="/signup">
                    Sign Up
                  </NavLink>
                </li>


              </ul>
            </div>
          </div>
          {/* Collapsible wrapper */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>


  )
}
export default Navbar;
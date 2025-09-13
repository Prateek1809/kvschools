import React from 'react'

function navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-success">
        <div className="container-fluid">
          {/* Mobile Menu Button */}
          <button
            className="navbar-toggler w-100 text-start"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            Menu <span className="navbar-toggler-icon float-end"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Home</a>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle "
                  href="#"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Institution
                </a>
                <ul className="dropdown-menu" aria-labelledby="aboutDropdown">
                  <li><a className="dropdown-item" href="/announcements">Announcements</a></li>
                  <li><a className="dropdown-item" href="#">Vision & Mission</a></li>
                  <li><a className="dropdown-item" href="#">Principal's Desk</a></li>
                  <li><a className="dropdown-item" href="#">Achievements</a></li>
                </ul>
              </li>

              {/* Academics Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="academicsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academics
                </a>
                <ul className="dropdown-menu" aria-labelledby="academicsDropdown">
                  <li><a className="dropdown-item" href="#">Curriculum</a></li>
                  <li><a className="dropdown-item" href="#">Subjects Offered</a></li>
                  <li><a className="dropdown-item" href="#">Examination</a></li>
                  <li><a className="dropdown-item" href="#">Faculty</a></li>
                </ul>
              </li>

              {/* Administration Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="adminDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Administration
                </a>
                <ul className="dropdown-menu" aria-labelledby="adminDropdown">
                  <li><a className="dropdown-item" href="#">School Committee</a></li>
                  <li><a className="dropdown-item" href="#">Staff Details</a></li>
                  <li><a className="dropdown-item" href="#">Rules & Regulations</a></li>
                </ul>
              </li>

              {/* Other links */}
              <li className="nav-item">
                <a className="nav-link" href="#">Finance</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">RTI</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Miscellaneous</a>
              </li>

              {/* Admission Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="admissionDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Admission
                </a>
                <ul className="dropdown-menu" aria-labelledby="admissionDropdown">
                  <li><a className="dropdown-item" href="#">Admission Rules</a></li>
                  <li><a className="dropdown-item" href="#">Fee Structure</a></li>
                  <li><a className="dropdown-item" href="#">Application Form</a></li>
                </ul>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Mandatory Disclosure Information</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default navbar
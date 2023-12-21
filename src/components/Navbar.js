import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.modeStatus} navbar-${props.modeStatus}`} style={{borderBottom:"1px solid gray",paddingBottom:"20px"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
            </ul>
            <form className="px-5 d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-${props.modeStatus==='light'?'dark':'success'}`} type="submit">Search</button>
            </form>
            <div className="px-5 form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={props.toggleMode} />
              <label style={{color:props.modeStatus==='light'?'black':'white'}} className="form-check-label" htmlFor="flexSwitchCheckChecked">LightMode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
}
Navbar.defaultProps = {
  title: "TextCounts",
}
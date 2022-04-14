import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../image/dlogo.png'
import profile from '../../image/profile.png'
import Search from '../single_component/Search'
function Navbar() {
  return (
    <>
    <div className="dashboard-navbar">
    <div className="container-fluid">
        <div className="row">
          <div className="col-12 mx-auto">
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/"><img src={logo} alt="" /></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav m-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Book Request <span className="ml-3">10</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">Department</NavLink>
        </li>
         <li className="nav-item">
          <NavLink className="nav-link" to="/service">Generate Report</NavLink>
        </li>
        
      </ul>

      <div class="search-container">
      <Search></Search>
    <img src={profile} alt="profile img" className="img-fluid" />
  </div>
      
    </div>
  </div>
  
</nav>
   </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar
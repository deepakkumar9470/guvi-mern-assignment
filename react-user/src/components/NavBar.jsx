import React from 'react'
// import {Container,Navbar,Nav,Button} from 'react-bootstrap'
import {NavLink ,Link} from 'react-router-dom'

import {HiLogout} from 'react-icons/hi'

const NavBar = ({auth}) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light  shadow-sm">
            <div className="container-fluid">
              <Link className="navbar-brand ml-5 p-3" to="/">Profile App</Link>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                 
                 {auth ? 
                    <>
                     <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/signup">Signup</Link>
                      </li>
                    </>
                    :

                    <>

                   <li className="nav-item">
                    <Link className="nav-link" to="/logout">
                      <HiLogout/>
                      Logout
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">My Profile</Link>
                  </li>
                    
                    </>
                  }
                  
                  
                 
                
                </ul>
                
              </div>
            </div>
         </nav>
        </div>
    )
}

export default NavBar

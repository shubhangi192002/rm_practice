import React from 'react'
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link className="cs" to="/casestudy">
              Case Studies
              <ul class="dropdown-menu">
                <li>
                  <Link class="dropdown-item" to="/casestudy1">
                    Case Study 1
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/casestudy2">
                    Case Study 2
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/casestudy3">
                    Case Study 3
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link to="#">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav

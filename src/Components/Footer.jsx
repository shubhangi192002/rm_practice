import React from 'react'
import logo from '../Images/Group 16.png'
import logoo from '../Images/Group 17.png'

function Footer() {
  return (
    <>
      <div className="footer bg-dark">
      <div>
        <img className='pb-4' src={logo} alt="" />
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing <br />elit, sed do eiusmod tempor incididunt ut labore et <br />dolore magna aliqua. Ut enim ad minim veniam, <br />quis nostrud exercitation ullamco laboris nisi ut <br />aliquip ex ea commodo consequat. Duis 
        </p>
      </div>
      <div>
        <div className="pb-4">
        <p>Email</p>
        <p>caravimamodiya@gmail.com</p>
        </div>
        <div className="pb-4">
        <p>Phone</p>
        <p>+91 98280 91785</p>
        </div>
        <div>
        <p>Address</p>
        <p>143, 1st Floor, Awadhpuri IInd, <br />
Mahesh Nagar, Jaipur - 302015</p>
        </div>
      </div>
      <div>
        <ul>
            <li className='pb-3'>Quick Links</li>
            <li className='pb-3'>Home</li>
            <li className='pb-3'>About</li>
            <li className='pb-3'>Case Studies</li>
            <li className='pb-3'>Contact</li>
            <li className='pb-3'>Buy the book</li>
        </ul>
      </div>
      <div>
        <p>Subscribe to our newsletter</p>
        <img src={logoo} alt="" /><br />
        <input className='my-3 px-2 py-1' type="email" placeholder='your email address' required/>
        <button className="btn btn-default">Subscribe</button>
        <div className="links">
        <i class="fa fa-spotify px-3"></i>
        <i class="fa fa-linkedin px-3"></i>
        <i class="fa fa-instagram px-3"></i>
        </div>
      </div>
      </div>
    </>
  )
}

export default Footer

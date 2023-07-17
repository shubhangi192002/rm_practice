import React from 'react'
import symbol from "../Images/Group 7.png";

function Contact() {
  return (
    <div>
      <div className="question my-5 d-flex">
          <div className="que-info">
             <p className="pb-3">
              Ravi Mamodiya shares experiences and solutions <br />
              to tackle the problem due to the lack of <br />
              succession planning, Subscribe to out newsletter, <br />
              Succession Samvaad and you will learn <br />
              something new every week!
             </p>
             <h3 className="py-2">
              Have more questions?
             </h3>
          </div>
          <div className="form">
             <form action="">
              <h6 className="pb-1">Full Name</h6>
              <input type="text" required/>
              <h6 className="pb-1">Email</h6>
              <input type="email" required/>
              <h6 className="pb-1">Phone Number</h6>
              <input type="phone" required/>
              <h6 className="pb-1">What can we help you with?</h6>
              <textarea name="" id="" cols="30" rows="10"></textarea>
              
             </form>
             <button className="btn btn-dark my-2">Contact Us</button>
          </div>
        </div>

        <div className="text-center my-4">
            <img className="pb-3" src={symbol} alt="" width={"92px"} height={"90px"}/>
            <h4 className="py-3">...you need more than luck to navigate successfully <br />through a thousand sieves in succession.</h4>
            <h4>-Richard Dawkins.</h4>
          </div>
    </div>
  )
}

export default Contact

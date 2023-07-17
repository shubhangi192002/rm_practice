import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Books from "./Books";
import Contact from "./Contact";
import Footer from "./Footer";
import handshake from "../Images/handshake 1.png";
import partener from "../Images/Helping a partner-pana 1.png";

function CaseStudyOne() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link className="cs active" to="/casestudy">
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

      <div className="hero">
        <div className="casestudyone">
          <div className="partone text-center mb-4">
            <img src={partener} alt="" className="text-center" />
            <h3 className="py-4">
              Resolving Will Litigation in a Case of <br />
              Ancestral and Inherited Properties
            </h3>
            <p className="py-2">
              This case study delves into a complex legal dispute centred around
              ancestral property jointly owned by two <br />brothers. The pivotal
              events unfold when one of the brothers, recognizing the importance
              of passing on his <br />legacy, creates a will designating his sons as
              successors to the property.   <br /><br />Tragically, following his passing,
              the surviving brother initiates a <br />legal case against his nephews,
              triggering a multifaceted conflict over the rightful ownership and
              usage of the inherited property. <br />The deceased brother's will
              clearly stated that the property should be divided equally between
              his two sons.
            </p>
          </div>
          <div className="parttwo mb-3">
            <div className="parttwo-info">
                <h5 className="py-3">Industry:</h5>
                <h5 className="pb-3">Business Line:</h5>
                <h5 className="pb-1">Area of work:</h5>
                <ul className="py-2">
                    <li>Helped them understand the Hindu Undivided Family (HUF) concept <br />and individual inheritance rights.</li>
                    <li>Stake of family members in HUF</li>
                </ul>
                <h5 className="pb-1">Helping with groudwork:</h5>
                <p className="py-2">
                Helped the sons understand the legal framework surrounding ancestral <br />properties, individual inheritance rights, and the implications of the <br />father's will.
                </p>
                <h5 className="pb-1">The Will:</h5>
                <p className="py-2" >The deceased brother's will stipulated that the properties should be <br />divided equally between his two sons. This testamentary document <br />carried legal weight and was intended to ensure a fair and smooth <br />transition of assets.</p>
                <h5 className="pb-1">Impact:</h5>
                <p className="py-2" >Resolved the will litigation dispute between Uncle and Nephew.<br/>Ensured a fair division of assets</p>

            </div>
            <div className="parttwo-img">
                <img src={handshake} alt="" />
            </div>
          </div>
        </div>

        <Books />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default CaseStudyOne;

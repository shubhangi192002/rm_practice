import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Books from "./Books";
import Contact from "./Contact";
import Footer from "./Footer";
import profits from '../Images/profits 1.png'
import team from '../Images/Team-pana 1.png'

function CaseStudyThree() {
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
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/casestudy1">
                    Case Study 1
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/casestudy2">
                    Case Study 2
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/casestudy3">
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
            <img src={team} alt="" className="text-center" />
            <h3 className="py-4">
              Smooth exit planning for a renowed
              <br />
              D2C Brand
            </h3>
            <p className="py-2">
              The D2C brand is jointly owned by two partners representing two
              families. However, the <br />
              upcoming generation is not interested in carrying the brand
              forward. The partners seek to <br />
              maximize the brand's valuation and explore options for selling the
              company.
            </p>
          </div>
          <div className="parttwo mb-3">
            <div className="partthree-info">
              <h5 className="py-3">Industry: D2C Brand</h5>
              <h5 className="pb-3">
                Business Line: Online & Offline D2C Brand
              </h5>
              <h5 className="pb-1">Area of work</h5>
              <p className="py-2">
                Challenges due to market{" "}
                <saturation className="br"></saturation>Working on the brand
                valuation <br />
                Facilitate a smooth transition or exit strategy
              </p>
              <h5 className="pb-1">A way forward</h5>
              <p className="py-2">
                We advised them to develop pitches for potential acquirers,
                execute <br />
                agreements, and plan for a successful exit.
              </p>
              <h5 className="pb-1">Valuation Process</h5>
              <p className="py-2">
                Identified assessing factors to conduct a thorough valuation of
                the <br />
                D2C brand. <br />
                Assisted them with Basic calculations on taxes.
                <br />
                Analyzed financial statements to determine a fair and
                competitive <br />
                valuation for the business.
              </p>
              <h5 className="pb-1">Planning the Exit Strategy</h5>
              <p className="py-2">
                Created a framework for a comprehensive exit strategy. <br />
                This strategy involves identifying the ideal timeline for sale,{" "}
                <br />
                considering tax implications, and outlining post-sale plans for{" "}
                <br />
                the partners.
              </p>
              <h5 className="pb-1">Executing Agreements</h5>
              <p className="py-2">
                Covered various aspects, including the sale of the company,
                transfer <br />
                of assets, intellectual property rights, employee contracts, and
                other <br />
                legal considerations.
                <br />
                Ensured all parties involved are satisfied with the terms and{" "}
                <br />
                conditions outlined in the agreements.
              </p>
              <h5 className="pb-1">Impact</h5>
              <p className="py-2">
                This approach allowed the partners to maximize the value of
                their <br />
                brand.
                <br />
                The D2C brand successfully navigated the challenges of selling
                its <br />
                brand to a new owner.
              </p>
            </div>
            <div className="partthree-img">
              <img src={profits} alt="" />
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

export default CaseStudyThree;

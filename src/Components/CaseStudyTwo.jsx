import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import Books from "./Books";
import Contact from "./Contact";
import Footer from "./Footer";
import teamwork from '../Images/teamwork 1.png'
import leadership from '../Images/leadership-pana (1) 1.png'

function CaseStudyTwo() {
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
            <img src={leadership} alt="" className="text-center" />
            <h3 className="py-4">
              Expanding the existing business with <br />
              the formation of a professional board
            </h3>
            <p className="py-2">
              The company sought to secure its future by involving the next generation.
              <br />Encountered obstacles due to the lack of clarity regarding roles and <br />responsibilities
            </p>
          </div>
          <div className="parttwo mb-3">
            <div className="parttwo-info">
              <h5 className="py-3">Industry: Metal</h5>
              <h5 className="pb-3">Business Line: Manufacturing</h5>
              <h5 className="pb-1">Area of work</h5>
              <p className="py-2">
                Facilitating the establishment of a professional board to address <br />duties and responsibilities
                <br />Developing a clear and effective hierarchical structure and <br />remuneration framework
              </p>
              <h5 className="pb-1">Developed Professional Board</h5>
              <p className="py-2">
                Collaborated closely with the owners and the next generation to <br />develop the professional board.
                <br />This involved a comprehensive assessment of the company's <br />organizational structure, current and <br />future business needs, and the skills and capabilities of the individuals entering the business
              </p>
              <h5 className="pb-1">Defined Roles</h5>
              <p className="py-2">
                Assessing the capabilities of the next generation and aligning them <br />with the company's needs led to enhanced performance and <br />productivity
                <br />Ensured that each family member entering the business had a <br />defined role that matched their skill set.
                <br />This approach helped mitigate the risk of dissatisfaction, <br />underperformance, or conflicts within the organization.
              </p>
              <h5 className="pb-1">Impact</h5>
              <p className="py-2">
                Professional Stand in the Market
                <br />The manufacturing company underwent a significant <br />transformation.
                <br />Improved structure and streamlined processes increased <br />operational efficiency, effective decision-making, and enhanced <br />customer trust and satisfaction.
              </p>
            </div>
            <div className="parttwo-img">
              <img src={teamwork} alt="" />
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

export default CaseStudyTwo;

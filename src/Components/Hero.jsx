import React from "react";
import bg from "../Images/Business vision-pana 1.png";
import handshake from "../Images/handshake 1.png";
import profits from "../Images/profits 1.png";
import teamwork from "../Images/teamwork 1.png";
import Card from "./Card";
import character from "../Images/freepik--Characters--inject-2.png";
import character1 from "../Images/freepik--Character--inject-1.png";
import leadership from "../Images/leadership-pana (1) 1.png";
import team from "../Images/Team-pana 1.png";
import Info from "./Info";
import Books from "./Books";
import workshop from "../Images/Group 19.png";
import plan from "../Images/Group 10.png";
import symbol from "../Images/Group 7.png";
import group15 from "../Images/Group 15.png";
import Card2 from "./Card2";
import highFive from "../Images/high-five 1.png";
import alms from "../Images/alms 1.png";
import destination from "../Images/destination 1.png";
import family from "../Images/family 1.png";
import group12 from "../Images/Group 12.png";
import Contact from "./Contact";
import Footer from "./Footer";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container" id="container">
          <div className="info">
            <h1>
              Succession - For your <br />
              Business, Family, and <br />
              Future.
            </h1>
            <p>
              know the valuation of your business before making <br />
              any big transitions
            </p>
            <div className="btn">
              <button type="button" className="btn btn-dark my-4">
                Know More
              </button>
              <button className="btn btn-default">Get in Touch</button>
            </div>
          </div>
          <img className="bg" src={bg} alt="" />
        </div>
        <h3 className="title text-center">
          Having a Succession plan is like having <br />
          insurance for your legacy.
        </h3>

        <div className="grid">
          <Card
            img={handshake}
            title="Hand Over"
            body="Safegaurd your legacy and family Values Amicable ans systematic tranfer of power"
            note="Book an Appointment "
          />
          <Card
            img={teamwork}
            title="Expansion"
            body="Take business beyond a Family Venture and Set up a professional board"
            note="Free Business Health Check Up "
          />
          <Card
            img={profits}
            title="Exit"
            body="Sell your business Merger with another business"
            note="Get your Business Valuation "
          />
        </div>

        <div className="caseStudy my-5 py-3" id="caseStudy">
          <div className="heading my-4">
            <div className="heading-info mb-5">
              <h2 className="pb-4">Case Studies</h2>
              <button className="btn btn-dark">CTA</button>
            </div>
            <img src={character1} alt="" />
          </div>
          <div className="case-study-img">
            <Info
              title={
                <>
                  Resolving Will Litigation in a Case of Ancestral <br />
                  and Inherited Properties
                </>
              }
              img={character}
            />
            <hr />
            <Info
              title={
                <>
                  Expanding the existing business with the formation <br />
                  of a professional board
                </>
              }
              img={leadership}
            />
            <hr />
            <Info
              title={<>Smooth exit planning for a renowed D2C Brand</>}
              img={team}
            />
          </div>
        </div>

        <Books />

        <div className="workshop">
          <div className="workshop-info text-center mb-4">
            <img className="my-4" src={workshop} alt="" />
            <h2 className="my-4">Workshop Coming Soon...</h2>
            <button className="btn btn-dark mb-4">
              <i class="fa fa-envelope-o px-2"></i>Join our mailing list to stay
              updated about our upcoming workshop
            </button>
          </div>
        </div>
      </section>

      <div className="about mt-5 d-flex justify-content-space-between">
        <div className="about-info">
          <h3 className="py-4">About Ravi Mamodiya</h3>
          <p className="mb-5">
            I have dedicated over a decade to immersing myself in the realm{" "}
            <br />
            of SMF business growth and advisory <br />
            With a comprehensive understanding of the intricacies involved, I{" "}
            <br />
            offer strategic guidance and practical solution to facilitate <br />
            successful business succession.
          </p>
        </div>
        <img src="" alt="" />
      </div>

      <div className="hero">
        <div className="text text-center">
          <h3>
            80% of Indian businesses are family-owned, and <br />
            only 21% have a succession plan in place.
          </h3>
        </div>

        <div className="plan py-5 d-flex">
          <div className="plan-heading">
            <h2 className="pb-4">
              Succession Planning - <br />
              The Ravi Mamodiya Way
            </h2>
            <p className="pb-4">
              If you ever walk into Ravi’s office, you will notice how his
              personality <br />
              reflects in everything that the office holds. Be it the subtle
              decor or a <br />
              homely and comfortable vibe, Ravi Mamodiya is present in every{" "}
              <br />
              element. That is exactly how his perspective towards succession
              is. It is <br />
              authentic, it is practical and yet it embodies the family values
              that we <br />
              have all grown up with. Succession is not just a task with Ravi.
              It is a <br />
              journey that you make to safeguard something more than just your{" "}
              <br />
              business and assets. With Ravi, you go beyond just a handover -
              you <br />
              take the first step towards building a legacy.
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle pr-3"></i>
              The ways to get the best value out of your business
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>
              How you can plan the legacy of your business to run beyond <br />3
              generations 
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>3 P’s Framework for creation of
              the will 
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>
              Understand how to create a professional board for your business
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>
              Planning  strategic exit for your business
            </p>
          </div>
          <div className="plan-img">
            <img src={plan} alt="" className="img" />
            <div className="plan-img-info px-4 py-4">
              <img src={symbol} alt="" />
              <p className="py-2">
                It's more than just passing on your assets. We should look at it
                as a sacred <br />
                act of preserving and passing on our culture to the next
                generation. It's an <br />
                opportunity to impart values that shape their lives and honour
                our legacy.
              </p>
              <h6 className="py-3">Ravi Mamodiya</h6>
            </div>
          </div>
        </div>

        <div className="books d-flex" id="books">
          <div className="books-info mx-5">
            <h3 className="my-4 ">
              Did you know that having a will is <br />
              benificial even for people who are <br />
              not into business?
            </h3>
            <p>How does a will benefit the common man?</p>
            <p className="pb-2">
              <i class="fa fa-check-circle pr-3"></i>
              Protects the future of the Spouse 
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>
              Helps in leaving behind a legacy for future generations 
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>
              Helps avoid legal conflict  
            </p>
            <p className="pb-2">
              <i class="fa fa-check-circle"></i>
              Leaves a roadmap to preserve family assets
            </p>
          </div>
          <img src={group15} alt="" />
        </div>

        <div className="why">
          <h4 className="text-center">
            Why must every individual have a will in place?
          </h4>
        </div>

        <div className="why-grid">
          <Card2
            img={alms}
            body={
              <>
                Peaceful handover of assets <br />
                to the next generation
              </>
            }
          />
          <Card2
            img={family}
            body={
              <>
                Safeguarding rights for <br />
                spouses and children
              </>
            }
          />
          <Card2
            img={destination}
            body={
              <>
                Providing a roadmap for the <br />
                asset’s and business's future
              </>
            }
          />
          <Card2
            img={highFive}
            body={
              <>
                Zero hassle of litigation <br />
                amongst family members <br />
                or business stakeholders
              </>
            }
          />
        </div>

        <div className="threeP">
          <h3 className="ps text-center">3-P's Framework</h3>

          <div className="container" id="container">
            <div className="container-info">
              <div className="infos">
                <div className="line mt-5"></div>
                <div className="line-info">
                  <h3>Property</h3>
                  <p>
                    List out the assets and properties to be included in the
                    will. <br />
                    Make sure to include moveable and immovable items,real{" "}
                    <br />
                    estate, investments, and other valuable possessions to be{" "}
                    <br />
                    distributed.
                  </p>
                </div>
              </div>
              <hr />
              <div className="infos">
                <div className="line mt-5"></div>
                <div className="line-info">
                  <h3>People</h3>
                  <p>
                    Determine the individuals who will inherit or receive a
                    share of <br />
                    your property/assets including the names and details of{" "}
                    <br />
                    beneficiaries, such as family members, friends, or
                    charitable <br />
                    organisations.
                  </p>
                </div>
              </div>
              <hr />
              <div className="infos">
                <div className="line mt-5"></div>
                <div className="line-info">
                  <h3>Percentage</h3>
                  <p>
                    Allocate the distribution of property among the identified{" "}
                    <br />
                    beneficiaries. Specify the percentage or proportion of the
                    estate <br />
                    that each individual will receive.
                  </p>
                </div>
              </div>
            </div>
            <img className="container-bg" src={group12} alt="" />
          </div>
        </div>

        <div className="appointment">
        <h2 className="my-4">Looking for an expert to <br />help you draft a perfect will?</h2>
            <button className="btn btn-dark mb-4"><i class="fa fa-list-alt px-2"></i>Book an appointment with Ravi Mamodiya.</button>
        </div>
      </div>

      <div className="testimonial text-center my-5">
      <h3>Testimonial</h3>
        <img src={symbol} alt="" className="py-4" />
        <p className="py-3">
        We were facing a family dispute over property, and there was a long pending litigation. The <br />case was so unorganized that we were getting confused. This is where we consulted Ravi.
        </p>
        <p className="py-3">
        As Ravi went through our case, he came across points that proved insightful. With his <br />consultation and a couple of meetings, the long pending case got a verdict in a span of two <br />months. I strongly recommend Ravi for his inconsiderable efforts and his problem-solving <br />approach in succession related legal cases.
        </p>
        <h6>Name</h6>
      </div>

      <div className="hero">
        <Contact symbol={symbol}/>

        <Footer/>
      </div>
    </>
  );
}

export default Hero;

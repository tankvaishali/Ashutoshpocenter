import React from "react";
import HOCcomponent from "./HOCcomponent";
import "../assets/css/AboutUs.css";
import Aboutproduct from "./Aboutproduct";
import Aboutuscontent from "./Aboutuscontent";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";
import OurTeam from "./OurTeam";
import OurVIsionandMission from "./OurVIsionandMission";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function AboutUs() {
  return (
    <>
      <div className="aboutus_image">
        <div className='homebg_image'>
          <div className='m-0 p-0 colorshad h-100 w-100 d-flex justify-content-end align-items-center '>
            <div className='col-lg-9 col-md-9 col-10 mx-auto overHeight'>
              <div className="overlay p-5" style={{ height: '100%' }}>
                <h1 className="text-center textshadow lh-base" style={{ height: '50%' }}>
                  {/* <TypeAnimation
                    cursor={false}
                    className='custom-type-animation-cursor  fw-bolder py-5 text-capitalize'
                    sequence={[
                      'Healing With Heart, Journey For Hope', 3000,
                      'Compassionate Care, Pathway to Renewal', 3000,
                    ]}
                    repeat={Infinity}
                  /> */}
                  <Carousel controls={false} indicators={false} interval={3000} duration={3000} data-aos="zoom-in" data-aos-duration="2000" className='overflow-hidden'>
                    <Carousel.Item>
                      <h1 className='text-center textshadow lh-base fw-bold'>Healing With Heart, Journey For Hope</h1>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className='text-center textshadow lh-base fw-bold'>Compassionate Care, Pathway To Renewal</h1>
                    </Carousel.Item>
                  </Carousel>
                </h1>
                <p className="text-center py-4 fs-4 textshadowslogen fw-semibold text-capitalize">
                Uniquely Tailored Care for Optimal Outcomes
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Aboutuscontent />
     <div className="mt-5">
     <OurVIsionandMission />
     </div>
      <Aboutproduct />
      <OurTeam />

      <div className="armprs_bgimage my-5 mb-0 overflow-hidden py-5">
        <div className="container py-5">
          <div className="row m-0 p-1 p-md-5 pt-5 p-lg-0 redirect_contact  align-content-center align-items-center justify-content-center ">
            <div
              className=" col-12 col-lg-6  ps-3 text-white fs-1 text-center"
              data-aos="zoom-in"
              data-aos-duration="1800"
            >
              <span className="headtittle text-white">Your Health & Our Commitment !</span>
              <div className="fs-6 py-2" style={{fontFamily:"Roboto, sans-serif"}} >
                Our Commitment Is Dedicated To Your Well-Being Every Steps
              </div>
              <div className="fs-6 py-2" style={{fontFamily:"Roboto, sans-serif"}}>
                {" "}
                Let's Partnering For Your Optimal Well-Being Together
              </div>
              <span className="d-block d-md-flex align-content-center align-items-center justify-content-center">
                <Player
                  autoplay
                  loop
                  src={
                    "https://lottie.host/828fa48c-487e-4721-8c24-e51b862119b8/PkyfRK4e0g.json"
                  }
                  className="lottie"
                  style={{ height: "100px", width: "100px" }}
                />
                <Link
                  to={"tel:  +(91)87994 54754"}
                  className="text-decoration-none text-white headtittle fs-3 "
                >
                  {" "}
                  +91 87994 54754
                </Link>
              </span>
            </div>
    
            <div
              className=" col-12 col-lg-6 p-0 m-0  text-center overflow-hidden"
              data-aos="fade-left"
              data-aos-duration="1800"
            >
              <div className="col-8 mx-auto">
                <Player
                  autoplay
                  loop
                  src={
                    "https://lottie.host/fd80c1c6-dc96-4d6b-a887-59ae1c401c9a/ji0YbRWeaJ.json"
                  }
                  className="lottie rounded-circle rounded-bottom-0 mt-5"
                // style={{ height: '150px', width: '150px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HOCcomponent(AboutUs);

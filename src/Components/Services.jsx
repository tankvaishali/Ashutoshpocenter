import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="container">
        <div className="headoneline py-2 text-center linecenter" data-aos="fade-up" data-aos-duration="1500"> Clinic Services </div>
        <div className="headtittle py-2 text-center" data-aos="fade-up" data-aos-duration="1500">
          Leading Prosthetic Care Provider
        </div>
        <div className="row m-0  p-0" >
          <div className="col-12 col-lg-6 text-start">
          </div>
          <div className="col-12 col-lg-1 d-none d-lg-block">
            {/* <div className="contentdata">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            impedit blanditiis fugit 
          </div> */}
          </div>
          <div className="col-12 col-lg-5 ps-lg-5 p-0 ">
            <div className="w-50 mx-auto ms-lg-auto ">
              {/* <button className="btn_hover text-white  rounded-pill border-0 px-5 p-1">
              {" "}
              Products{" "}
              <span className="fs-5">
                <GoArrowRight />
              </span>
            </button> */}
              {/* <img src={require("../assets/images/doctor-with-stethoscope_1401-34.jpg")} alt="" className="img-fluid animated-image" /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row m-0 pb-5 mb-5 p-0 g-5">
          <div className="col-12 col-lg-5 d-none d-lg-block overflow-hidden p-3 pt-0">
            <div className="h-100" data-aos="fade-right" data-aos-duration="1500">
              <img
                src={require("../assets/images/leg.png")}
                alt=""
                className="img-fluid w-100 h-100 object-fit-fill"
              />
            </div>
          </div>
          <div className="col-12 col-lg-7" >
            <div className="d-block d-lg-flex justify-content-between servicedata pb-2" data-aos="zoom-in" data-aos-duration="1500">
              <div>
                <div className="service_image rounded-circle">
                  <img
                    src={require("../assets/images/Goggins-1.jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 rounded-circle object-fit-cover"
                  />
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="maincolor fs-3 py-3 py-lg-0 my-2">
                  {" "}
                  High-Tech કૃત્રિમ પગ
                </div>
                <div className="contentdata  py-2 py-lg-0 fs-6 my-1 mb-3">
                  પોલિયાના દર્દીઓ પગની ડીફોમીટો, સ્નાયુ શકિત અનુસાર સરળતાથી ચાલી શકાય અને વજન હલકા ઓટોમેટીક લોકિંગ સિસ્ટમ સાથેના Hitech Caliper બનાવી આપવામાં આવશે.
                </div>
                <Link to={"/prosthesisleg"} className=" btnhovercolor text-white text-decoration-none  rounded-pill border-0 px-4 p-2">
                  {" "}
                  Read More
                  <span className="fs-5">
                    {" "}  <GoArrowRight />
                  </span>
                </Link>
              </div>
            </div>
            <div className="d-block d-lg-flex justify-content-between servicedata py-3" data-aos="zoom-in" data-aos-duration="1500">
              <div>
                <div className="service_image rounded-circle">
                  <img
                    src={require("../assets/images/hands-01 (2).jpg")}
                    alt=""
                    className="img-fluid w-100 h-100 rounded-circle object-fit-cover"
                  />
                </div>
              </div>
              <div className="px-4 pb-4">
                <div className="maincolor fs-3 py-3  py-lg-0 my-1" >
                  {" "}
                  High-Tech કૃત્રિમ હાથ
                </div>
                <div className="contentdata py-2 fs-6 py-2 py-lg-0 my-1 mb-3">
                  હાથ કપાયેલા દર્દીઓ માટે મીકેનીકલ તથા મગજથી સંચાલીત માયોઈલેકટ્રીક હાથ (બેટરી ઓપરેટેડ) કે જેના દ્વારા ઓટોમેટીક હાથ ખોલી તેમજ બંધ કરી શકાય તેવા કૃત્રિમ હાથ બનાવી આપવામાં આવશે.
                </div>
                <Link to={"/prosthesishand"} className="btnhovercolor text-white text-decoration-none  rounded-pill border-0 px-4 p-2 my-5 mb-5">
                  {" "}
                  Read More
                  <span className="fs-5">
                    {" "}  <GoArrowRight />
                  </span>
                </Link>
              </div>
            </div>
            <div className="d-block d-lg-flex justify-content-between servicedata py-3 pb-4" data-aos="zoom-in" data-aos-duration="1500">
              <div>
                <div className="service_image rounded-circle">
                  <img
                    src={require("../assets/images/1702306084235.jpeg")}
                    alt=""
                    className="img-fluid w-100 h-100 rounded-circle object-fit-cover"
                  />
                </div>
              </div>
              <div className="px-4">
                <div className="maincolor fs-3 py-3 py-lg-0 my-1">
                  {" "}
                  High-Tech કસ્ટમાઇઝ ઓર્થોસીસ
                </div>
                <div className="contentdata py-2 fs-6 py-2 py-lg-0 my-1 mb-3">
                  મણકાની તફલીફો જેવી કે
                  સ્કોલિયોસિસ / કાયફોસિસ દર્દીઓ માટે કસ્ટમાઈઝડ  પોસ્ટ કરેક્ટિવ બ્રેસ કસ્ટમાઈઝડ બનાવી આપવામાં આવશે.
                </div>
                <Link to={"/CustomiseOrtho"} className="btnhovercolor text-white text-decoration-none  rounded-pill border-0 px-4 p-2 my-5 mb-5">
                  {" "}
                  Read More
                  <span className="fs-5">
                    {" "}  <GoArrowRight />
                  </span>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>

    </>
  );
}

export default Services;

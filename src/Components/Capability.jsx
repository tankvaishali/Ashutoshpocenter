import React from "react";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";
function Capability() {
  return (
    <>
      <div className="mt-0 mb-5">
        <div className=" text-center lightbck_color">
          <div className="py-2 headoneline pt-5 linecenter" data-aos="fade-up" data-aos-duration="1500">Our Clinical</div>
          <div className="py-2 headtittle" data-aos="zoom-in" data-aos-duration="1500">Our Capability</div>
          <div className="container pb-5">
            <div className="row mb-5 m-0 g-5 text-center">
              <div className="col-12  col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                <div class="flip-card">
                  <div class="flip-card-inner">
                    <div class="flip-card-front bg-white">
                      <div className="head_image mx-auto">
                        <img
                          src={require("../assets/images/anatomy-human-pelvis-vector-illustration-white-background_751796-97.png")}
                          alt=""
                          className="img-fluid w-100 h1-00"
                        />
                      </div>
                      <p className="fw-bold fs-5 maincolor">Joint Restoration</p>
                      <p className="contentdata px-4 fs-6 mt-auto ">
                        The primary goal of joint restoration is to restore mobility and alleviate discomfort, improving the patient's overall quality of life.
                      </p>
                    </div>
                    <div class="flip-card-back">
                      <div className="d-flex align-items-center align-content-center text-white h-100 w-100">
                        <div>
                          {" "}
                          <p className="fw-bold fs-5 ">Joint Restoration</p>
                          <p className=" px-4 fs-6 infocolor fw-medium">
                            Joint restoration aims to provide sustainable solutions, enabling patients to return to their daily activities with minimal pain and improved joint function.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                <div class="flip-card ">
                  <div class="flip-card-inner">
                    <div class="flip-card-front bg-white">
                      <div className="head_image mx-auto">
                        <img
                          src={require("../assets/images/biomedical-mechanisms-prostheses-leg-arm-260nw-1532974937.png")}
                          alt=""
                          className="img-fluid w-100 h1-00"
                        />
                      </div>
                      <p className="fw-bold fs-5 maincolor">Prosthesis Manufactory</p>
                      <p className="contentdata px-4 fs-6 mt-auto">
                        This personalization involves detailed measurements, fittings, and adjustments to ensure optimal comfort and performance.

                      </p>
                    </div>
                    <div class="flip-card-back manufacure ">
                      <div className="d-flex align-items-center align-content-center text-white h-100 w-100">
                        <div>
                          {" "}
                          <p className="fw-bold fs-5 ">Prosthesis Manufactory</p>
                          <p className=" px-4 fs-6 infocolor fw-medium">
                            This process involves intricate design and engineering to ensure the prosthetic device mimics the functionality and appearance of a natural limb as closely as possible.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-4" data-aos="flip-left" data-aos-duration="1500">
                <div class="flip-card ">
                  <div class="flip-card-inner">
                    <div class="flip-card-front bg-white">
                      <div className="head_image mx-auto">
                        <img
                          src={require("../assets/images/design-concept-set-electric-wheelchair-manual-wheelchair-disabled-carriage-icons_231873-6535.png")}
                          alt=""
                          className="img-fluid w-100 h1-00"
                        />
                      </div>
                      <p className="fw-bold fs-5 maincolor">Support Equipment</p>
                      <p className="contentdata px-4 fs-6 mt-auto">
                        Modern support equipment often incorporates advanced materials and ergonomic designs to ensure  and user comfort.
                      </p>
                    </div>
                    <div class="flip-card-back equipment">
                      <div className="d-flex align-items-center align-content-center text-white h-100 w-100">
                        <div>
                          {" "}
                          <p className="fw-bold fs-5 ">Support Equipment</p>
                          <p className=" px-4 fs-6 infocolor fw-medium">
                            The development of these devices involves close collaboration between engineers, healthcare professionals, and patients to ensure that each product meets high standards of quality and effectiveness.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Link to={"/CustomiseOrtho"} className=" btnhovercolor text-white text-decoration-none  rounded-pill border-0 px-4 p-2 my-3  mb-3">
                {" "}
                View More
                <span className="fs-5">
                  {" "}  <GoArrowRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Capability;

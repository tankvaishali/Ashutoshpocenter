import React from "react";
import "../assets/css/Contactus.css";
import HOCcomponent from "./HOCcomponent";
import Form from "./Form";
import { MdMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const data = [
  {
    title: "Email",
    description: "help@ashutoshpocenter.com",
    icon: (
      <MdMail className="p-2 mt-2 iconhover2 icon rounded-circle" />
    ),
    Link: "mailto:help@ashutoshpocenter.com",
    aos: "fade-right"
  },
  {
    title: "Location",
    description:
      "302, Param Doctor House, Lal Darwaja, Varachha, Surat, Gujarat 395003",
    icon: (
      <FaLocationDot className=" p-2 mt-2 iconhover2 icon rounded-circle" />
    ),
    Link: "https://www.google.com/maps/dir//302,+Param+Doctor+House,+Lal+Darwaja,+Varachha,+Surat,+Gujarat+395003/@21.2062896,72.7551606,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be04fab21103b69:0xa299912d3085be89!2m2!1d72.8375623!2d21.2063096?entry=ttu",
    aos: "fade-down"
  },
  {
    title: "Call Us",
    description: "+91 87994 54754",
    icon: (
      <BiSolidPhoneCall className=" p-2 mt-2 iconhover2 icon rounded-circle" />
    ),
    Link: "tel:8799454754",
    aos: "fade-left",
  },
];

function Contactus() {
  return (
    <>
      <div className="contact_bg">
        <div className='homebg_image'>
          <div className='m-0 p-0 colorshad h-100 w-100 d-flex justify-content-end align-items-center '>
            <div className='col-lg-9 col-md-9 col-10 mx-auto overHeight'>
              <div className="overlay p-4 p-sm-4 p-lg-5 p-md-5" style={{ height: '100%' }}>
                <h1 className="text-center textshadow lh-base" style={{ height: '50%' }}>
                  {/* <TypeAnimation
                    cursor={false}
                    className='custom-type-animation-cursor  fw-bolder py-5 text-capitalize'
                    sequence={[
                      'Restoring Mobility, Renewing Lives', 3000,
                      'transforming leaves, restoring motion', 3000,
                    ]}
                    repeat={Infinity}
                  /> */}
                  <Carousel controls={false} indicators={false} interval={3000} duration={3000} data-aos="zoom-in" data-aos-duration="2000" className='overflow-hidden'>
                    <Carousel.Item>
                      <h1 className='text-center textshadow lh-base fw-bold'>Restoring Mobility, Renewing Lives</h1>
                    </Carousel.Item>
                    <Carousel.Item>
                      <h1 className='text-center textshadow lh-base fw-bold'>Transforming leaves, Restoring Motion</h1>
                    </Carousel.Item>
                  </Carousel>
                </h1>
                <p className="text-center py-2 fs-4 textshadowslogen fw-semibold text-capitalize">
                Community well-being begins with caring conversations
                </p>
              </div>
            </div>
          </div>
        </div >
      </div>
      <div className="container pb-0">
        <div className="row justify-content-center overflow-hidden">
          {data.map((item) => (
            <div className="col-lg-4 col-md-4 text-center mb-3" data-aos={item.aos} data-aos-duration="1800">
              <Link to={item.Link} className="text-decoration-none">
                <div className="bgpost">
                  <div className="contacticon_size">{item.icon}</div>
                  <h4 className="header1 text-break  mx-auto">{item.title}</h4>
                  <div className=" px-2 text-break mx-auto contact_pera">
                    {item.description}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="row justify-content-center m-0">
        <div
          className="col-12 px-0 overflow-hidden"

        >
          <div className=" p-0">
            <form>
              <Form />
            </form>
          </div>
        </div>

      </div>
      <div className="bg-body-secondary py-5">
        <div className="container">
        <div className="col-12 mx-auto ">
          <h1
            className="text-center fs-2 headtittle"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            Find Us On Google Maps
          </h1>
          <div className="w-100 h-100 my-3" id="iframe" data-aos="zoom-in"
            data-aos-duration="1800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.6435468552745!2d72.83498737380307!3d21.206314581659342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fab21103b69%3A0xa299912d3085be89!2sASHUTOSH%20PROSTHETICS%20%26%20ORTHOTICS%20CENTER!5e0!3m2!1sen!2sus!4v1718857447832!5m2!1sen!2sus"
              height="450"
              width="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="From Google Map"
            ></iframe>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default HOCcomponent(Contactus);

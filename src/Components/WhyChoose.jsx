import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";

function WhyChoose() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "+918799454754"; // Replace with your phone number
    const message = "Hello,The prosthesis made by us guarantee you a comfortable life."; // Replace with your message
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };
  return (
    <>

      <div className=' mt-5'>

        <div className='container'>
          <div className='row m-0 p-0 g-5 py-4'>
            <div className='col-12 col-lg-6 ' data-aos="fade-down"
              data-aos-duration="1800">
              <div >
                <img src={require("../assets/images/person-running-road-generative-ai_896686-7226.jpg")} alt="" className='img-fluid w-100 h-100 rounded-4' />
              </div>


              <div>
                <div className='text-white rounded-pill whatsappcolor text-center pb-2 px-5 mx-auto my-3  p-1' onClick={handleWhatsAppClick} style={{ cursor: 'pointer' }}><span className='fs-5 pe-2' ><BsWhatsapp />
                </span>Get Now</div>
              </div>


            </div>
            <div className='col-12 col-lg-6' data-aos="fade-up" data-aos-duration="1800">
              <div>
                <div className='headoneline py-2 linetitle'>Why Patient Choose Our Prosthesis ?</div>
                <div className='headtittle text-capitalize pt-2'>
                  The Prosthesis Made By Us Guarantee You a Comfortable Life.</div>
                <div className='contentdata fs-6'>
                  <div className='py-2'><span className='headoneline fs-5 pe-2'><FaCheckCircle /></span>Personalized care, advanced technology, experienced specialists, comprehensive support, and outstanding success rates.</div>
                  <div className='py-3 pt-4'><span className='headoneline fs-5 pe-2'><FaCheckCircle /></span>We provide tailored solutions that meet the unique needs of each patient, ensuring comfort</div>
                  <div className='py-2'><span className='headoneline fs-5 pe-2'><FaCheckCircle /></span>We prioritize patient satisfaction and work closely with each individual to ensure their specific goals and needs are met.</div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
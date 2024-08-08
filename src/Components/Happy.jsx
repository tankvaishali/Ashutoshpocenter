import React from 'react';
import { FaCheckCircle } from "react-icons/fa";

function Happy() {
  return (
    <>
      <div className='mt-5 haapy_image'>
        <div className="happybck_color py-5" >

          <div className='container'>
          <div className='row m-0 p-0 py-4 g-4 align-items-center'>
            <div className='col-12 col-lg-6 overflow-hidden'>
              <div className='p-0' data-aos="fade-right"
                data-aos-duration="1800">
                <div className='ptbg_color p-4' >
                  <div className='fs-3 headtittle fw-bold'>Our Only Priority Is Caring For You.</div>
                  <div className='contentdata py-3 fs-6'>From the initial consultation to follow-up appointments, we offer comprehensive support and compassionate care to help you regain your independence and improve your quality of life.we provide diagnosis like this type...</div>

                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span> ડાયાબિટીસ ફુટકેર ઓર્થોસીસ
                  </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span> પોડિયાટ્રી અને ઓર્થોફૂટ કેર
                  </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span> કસ્ટમાઈઝડ સ્પાઈનલ ઓર્થોસીસ </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span>સિલિકોન જેલ કેર સારવાર </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span> પોસ્ટ ઓપરેટીવ ફ્રેકચર ઓર્થોસીસ </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span>  સિલિકોન કોસ્મેટીક પ્રોસ્થેસીસ </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span>  ન્યુરોલોજીકલ અને વિકલાંગનો લગતા દર્દીઓ માટે ઓર્થોસીસ </div>
                  <div className='py-1 fw-medium'><span className='headoneline fs-5 pe-2 gujaratifont_size'><FaCheckCircle /></span> આર્થરાઈટીક પેઈન રીલીવીંગ ઓર્થોસીસ </div>


                </div>
              </div>
            </div>
            <div className='col-12 col-lg-6 overflow-hidden'>
              <div style={{ height: "555px" }} data-aos="fade-left"
                data-aos-duration="1800">
                <img src={require("../assets/images/professional-group-doctors-standing-smiling_780838-4429.jpg")} alt="" className='img-fluid w-100 h-100 object-fit-cover' />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Happy
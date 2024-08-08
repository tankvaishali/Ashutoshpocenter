import { Player } from '@lottiefiles/react-lottie-player'
import React from 'react'
import { FaHospital } from 'react-icons/fa'
import { PiPhoneCallFill } from 'react-icons/pi'
import { SiGmail } from 'react-icons/si'
import { Link } from 'react-router-dom'
const data = [
  {
    title: "Email",
    description: "mailto:ashutoshpocenter.digital@gmail.com",
    icon: <SiGmail className='display-6 me-3 iconhover2' />,
    Link: 'mailto:ashutoshpocenter.digital@gmail.com'
  },
  {
    title: "Location",
    description: "302, Param Doctor House, Lal Darwaja, Varachha, Surat, Gujarat 395003",
    icon: <FaHospital className='display-6  me-3 iconhover2' />,
    Link: 'https://www.google.com/maps/dir//302,+Param+Doctor+House,+Lal+Darwaja,+Varachha,+Surat,+Gujarat+395003/@21.2062896,72.7551606,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be04fab21103b69:0xa299912d3085be89!2m2!1d72.8375623!2d21.2063096?entry=ttu'
  },
  {
    title: "Call Us",
    description: "+91 87994 54754",
    icon: <PiPhoneCallFill className='display-6  me-3 iconhover2' />,
    Link: 'tel:8799454754'
  },
]

function Form() {
  return (
    <div>
      <section class="mt-5">
        <div class="">
          <div className="contact-us-form pb-4">
            <div className='container'>
              <div class="row justify-content-center p-0">

                <div class="col-lg-5 col-md-5 col-10 text-center text-white row align-items-center me-0 me-md-2 mt-5 mt-md-0 overflow-hidden p-lg-4 p-md-3 p-sm-3" data-aos="fade-right" data-aos-duration="1800"
                // style={{ backgroundColor: 'white' }}
                >
                  <div className='bg-white rounded-circle rounded-bottom-0 pt-3 mt-3'>
                    {/* <img  src={require("../assets/images/cont-image.png")} className='img-fluid object-fit-cover' /> */}
                    <Player
                      autoplay
                      loop
                      src={
                        "https://lottie.host/18d4a569-7764-4b09-a5b6-00054b9bf3b6/vM4xB590iX.json"
                      }
                      className="lottie img-2"
                    // style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>

                <div class="col-lg-7 col-md-7 col-10 p-1 p-md-5 py-5 overflow-hidden" data-aos="fade-left" data-aos-duration="1800">
                  <div className='text-light' style={{ fontFamily: 'sans-serif' }}>
                    <h3 className='mb-4 fs-2 headtittle text-white '>Have Any Question ?</h3>
                    <p className='mb-4 fs-6 text-capitalize '>Feel free to drop us a Line below!</p>
                  </div>
                  <form action="https://formsubmit.co/help@ashutoshpocenter.com" method="POST">
                    <div class="row align-items-center justify-content-center">
                      <div class=" col-md-6 mb-4">
                        <input type="text" name="name" id="name" className='p-3' required placeholder='Name' />
                      </div>

                      <div class=" col-md-6 mb-4">
                        <input type="email" name="email" id="email" className='p-3' required placeholder='E-mail' />
                      </div>
                    </div>

                    <div class="row align-items-center justify-content-center">
                      <div class=" col-md-6 mb-4">
                        <input type="text" name="phone" id="phone" className='p-3' required placeholder='Phone No.' />
                      </div>

                      <div class=" col-md-6 mb-4">
                        <input type="date" name="date" id="date" className='p-3' style={{ colorScheme: 'dark' }} required />
                      </div>
                    </div>

                    <div class=" col-md-12 mb-4">
                      <textarea name="msg" id="msg" rows="4" className='p-3' required placeholder='Message'></textarea>
                    </div>

                    <div class="col-md-12 ">
                      <button type="submit" class="px-5 py-2 rounded-pill button"><strong>Send</strong> </button>
                    </div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Form
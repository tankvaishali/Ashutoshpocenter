import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineMarkEmailUnread, MdOutlineWifiCalling3 } from 'react-icons/md'
import { PiFacebookLogo } from 'react-icons/pi'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="background_footer text-white pt-5 pb-2">
        <div className="container text-start text-md-left">
          <div className="row justify-content-center text-md-left">
            <div className="container">
              <div className="row" >
                <div className="col-md-12 col-lg-4 col-xl-4 mx-auto mt-3" data-aos="zoom-in" data-aos-duration="1800">
                  <div className='row align-items-center justify-content-center'>
                    <div className='bg-white rounded-circle p-3' style={{ width: "115px", height: "115px" }}>
                      <img src={require('../assets/images/Ashutosh.png')} alt="Not Found" className='img-fluid w-100 h-100 object-fit-contain' />
                    </div>
                  </div>
                  <div className='icons text-center text'>
                    {/* <p className='text-center lh-lg text-uppercase text-orange px-3'>Prosthetics & Orthotics center</p> */}
                    <p className='p-3 footcolor_pera text-light'>We are dedicated to enhancing the quality of life for individuals with mobility challenges.</p>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4 col-xl-4 mx-auto mt-3 me-lg-0 p-2" data-aos="zoom-in" data-aos-duration="1800">
                  <h5 className="text-uppercase font-weight-bold text-orange mb-3 fttitle">ASHUTOSH</h5>
                  <Link to={"https://www.google.com/maps/dir//302,+Param+Doctor+House,+Lal+Darwaja,+Varachha,+Surat,+Gujarat+395003/@21.2062896,72.7551606,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be04fab21103b69:0xa299912d3085be89!2m2!1d72.8375623!2d21.2063096?entry=ttu"} target='_blank' className='pt-2 iconname text-decoration-none text-white'>302, Param Doctor House, Lal Darwaja, <div>Varachha, Surat, Gujarat 395003</div></Link>
                  <div className='pt-3'>
                    <Link to={"tel: 8799454754"} className='iconname text-decoration-none text-white'><MdOutlineWifiCalling3 className='me-2' /><span className='text-nowrap'>+91 87994 54754</span></Link>
                  </div>
                  <div className='pt-2'>
                    <Link to={"mailto: help@ashutoshpocenter.com"} className='text-break iconname iconname text-decoration-none text-white'><MdOutlineMarkEmailUnread className='me-2' />help@ashutoshpocenter.com</Link>
                  </div>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 p-2" data-aos="zoom-in" data-aos-duration="1800">
                  <h5 className="text-uppercase font-weight-bold text-orange mb-3 fttitle">Useful Links</h5>
                  <p className='pt-2'><Link className='text-light text-decoration-none footmenu ' to='/'>Home</Link></p>
                  <p><Link className='text-light text-decoration-none footmenu' to='/aboutus'>About Us</Link></p>
                  <p><Link className='text-light text-decoration-none footmenu' to='/contactus'>Contact Us</Link></p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3 p-2" data-aos="zoom-in" data-aos-duration="1800">
                  <h5 className="text-uppercase mb-3 font-weight-bold text-orange fttitle">SOCIAL MEDIA</h5>
                  <div className='icons text pt-2'>
                    <p className='text-capitalize fs-5 '><Link to={'https://www.facebook.com/people/Ashutosh-prosthetics-orthotics-center/100089259316975/'} className='text-decoration-none text-light iconname' target='_blank'><PiFacebookLogo className='me-2 fs-3' />facebook</Link></p>
                    <p className='text-capitalize fs-5 '><Link to={'https://www.instagram.com/ashutosh_prostheticscenter/?next=%2F&hl=en'} className='text-decoration-none text-light iconname' target='_blank'><IoLogoInstagram className='me-2 fs-3' />Instagram</Link></p>
                    <p className='text-capitalize fs-5  '><Link to={'https://wa.me/8799454754'} className='text-decoration-none text-light iconname' target='_blank'><IoLogoWhatsapp className='me-2 fs-4 ms-0 ms-md-1 fw-lighter' />whatsapp</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <p className='text-center fs-6'>Copyright © 2024 Ashutosh Prosthetics & Orthotics Center, All rights Reserved.</p>
          <hr />
        </div>
      </footer>
    </>
  )
}

export default Footer
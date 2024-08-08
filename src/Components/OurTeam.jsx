import React from 'react'
import { BsInstagram } from 'react-icons/bs'
import { FaAnglesRight } from 'react-icons/fa6'
import { GrFacebookOption } from 'react-icons/gr'
import { Link } from 'react-router-dom'

function OurTeam() {
    return (
        <div className='team_back py-3 mb-5'>
            <div className='container'>
                <div className='row  m-0 overflow-hidden py-3'>

                    <div className="col-lg-7 col-md-12 contteambg overflow-hidden p-4" data-aos="fade-right" data-aos-duration="1800" style={{ height: "100%" }}>
                        <div class="subtitle text-uppercase py-2 linetitle" style={{ color: "#F17D28" }}>Prosthetics & Orthotics</div>
                        <div class="headtittle text-white pt-2 drname">Dr. Dhara Vaghela</div>

                        <p class="py-2" style={{ color: "white", textAlign: "justify" }}>
                            Dr. Dhara Vaghela brings over 5 years of experience in the field of prosthetics and orthotics. He specializes in lower limb prosthetics and is renowned for his innovative approaches to improving patient mobility and comfort. Dr. Dhara Vaghela is dedicated to ongoing research and education.
                        </p>
                        <p class="fs-6 text-white py-1" style={{ color: "#2d2d51", fontWeight: "500", textAlign: "justify" }}>
                            <FaAnglesRight style={{ color: "#F17D28" }} /> Custom Prosthetic Devices: Design, creation, and fitting of prosthetic limbs tailored to individual needs.
                        </p>
                        <p class="fs-6 text-white py-1" style={{ color: "#2d2d51", fontWeight: "500", textAlign: "justify" }}>
                            <FaAnglesRight style={{ color: "#F17D28" }} /> Custom Orthotic Devices: Development of orthotic solutions for conditions such as scoliosis, cerebral palsy, and foot and ankle disorders.
                        </p>
                        <p class="fs-6 text-white py-1" style={{ color: "#2d2d51", fontWeight: "500", textAlign: "justify" }}>
                            <FaAnglesRight style={{ color: "#F17D28" }} /> Pediatric Prosthetics and Orthotics: Specialized care for children with unique needs.
                        </p>
                    </div>
                    <div className='col-lg-5 col-md-12 mb-4 mb-lg-0 px-lg-3 p-0 overflow-hidden' data-aos="fade-left" data-aos-duration="1800">
                        <div className='w-100 h-100 p-3 teamimage position-relative'>
                            <img src={require("../assets/images/448495366_1465182600756683_6965211937903328045_n.jpeg")} className='w-100 h-100 object-fit-cover imageteamsec' alt="" />
                            <div className='text-center icons-container'>
                                <Link to={"https://www.facebook.com/dhara.vaghela.988/"} target='_blank'><GrFacebookOption className='rounded iconbg' style={{ background: "white", width: "35px", height: "35px", padding: "8px", color: "#2d2d51" }} /></Link>
                                <Link to={"https://www.instagram.com/dr.dhara_158?igsh=MzFiN203eGR2M3Zy"} target='_blank'><BsInstagram className='ms-2 rounded iconbg' style={{ background: "white", width: "35px", height: "35px", padding: "8px", color: "#2d2d51" }} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default OurTeam
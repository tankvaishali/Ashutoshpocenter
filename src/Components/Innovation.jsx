import React from 'react'

function Innovation() {
    return (

        <div className='innovation'>
            <div className='inno_bckcolor pb-4'>
                <div className='container'>
                <div className='row m-0 py-5 g-5'>
                    <div className='col-12 col-lg-6' data-aos="fade-down"
                        data-aos-duration="1500">
                        <div className='h-100 p-0 p-lg-2'>
                            <div className='py-2 headoneline linetitle'>
                                INNOVATION AND EXPERTISE
                            </div>
                            <div className='headtittle py-2'>Elevate Your Mobility: Prosthetics And Orthotics Center</div>
                            <div className='py-3 contentdata'>We are dedicated to enhancing the quality of life for individuals with mobility challenges. Our state-of-the-art facility specializes in the design, fabrication, and fitting of custom prosthetic and orthotic devices. We understand that each patient’s needs are unique, and we strive to provide personalized solutions that ensure comfort, functionality, and aesthetic appeal. </div>
                            <div className='d-block text-center d-md-flex d-lg-flex align-content-center align-items-center justify-content-between py-2'>
                                <div data-aos="zoom-in" data-aos-duration="1500">
                                    <p className='numbercolor m-0'>98%</p>
                                    <p className='contentdata maincolor'>Device Comfort</p>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="1500">
                                    <p className='numbercolor m-0'>15.5K</p>
                                    <p className='contentdata maincolor'>Success Stories</p>
                                </div>
                                <div data-aos="zoom-in" data-aos-duration="1500">
                                    <p className='numbercolor m-0'>95%</p>
                                    <p className='contentdata maincolor'>Fit Success</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6' data-aos="fade-up"
                        data-aos-duration="1500">
                        <div className='h-100 px-0 px-lg-2'>
                            <img src={require("../assets/images/hands-01 (1).jpg")} alt="" className='img-fluid w-100 h-100 object-fit-cover' style={{borderRadius:"70px 5px 70px 5px"}} />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Innovation

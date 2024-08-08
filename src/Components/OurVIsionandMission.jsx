import React from 'react'

function OurVIsionandMission() {
    return (
        <>
            <div class='container overflow-hidden'>
                <div class='row p-0 m-0 overflow-hidden'>
                    <div class='col-lg-7 mb-5'>
                        <div class='vision_bg w-100' data-aos="fade-right" data-aos-duration="1800">
                            <div class='row justify-content-center  p-1 p-lg-4 py-4 overflow-hidden'>
                                <div class='col-10 col-md-4 col-sm-12 col-lg-4 text-center overflow-hidden'>
                                    <img src={require("../assets/images/mobile_566886-7914.png")} className="object-fit-cover rounded-circle" style={{ width: "150px", height: "150px" }} alt="" />
                                </div>
                                <div class='col-10 col-md-8 col-sm-12 col-lg-8 text-white contmisionvisioin' style={{ textAlign: "left" }}>
                                    <div class='headtittle text-white'>Vision</div>
                                    <div className='py-1'>To pioneer compassionate healing, redefine patient care standards, and inspire health and hope in every community we touch.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row p-0 m-0 overflow-hidden'>
                    <div class='col-lg-7 offset-lg-5 mb-5'>
                        <div class='mission_bg w-100' data-aos="fade-left" data-aos-duration="1800">
                            <div class='row justify-content-center p-1 p-lg-4 py-4'>
                                <div class='col-10 col-md-8 col-sm-12 col-lg-8 text-white contmisionvisioin order-lg-1 order-2 order-md-1' style={{ textAlign: "right" }}>
                                    <div class='headtittle text-white'>Mission</div>
                                    <div className='py-1'>Providing caring, evidence-based medical care with integrity, professionalism, innovation, ensuring patient well-being, resilience, and dignity.</div>
                                </div>
                                <div class='col-10 col-md-4 col-sm-12 col-lg-4 text-center order-lg-2 order-1 order-md-2'>
                                    <img src={require("../assets/images/successful-business-man-holding-trophy_1150-35042.jpg")} className="object-fit-cover rounded-circle" style={{ width: "150px", height: "150px" }} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurVIsionandMission
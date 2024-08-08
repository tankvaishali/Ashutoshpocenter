import React from 'react'
import "../assets/css/Counter.css"
import CountUp from 'react-countup';

function Counter() {
    return (
        <>
            <div className="container-xxl">
            <div className="impact-section overflow-hidden">
                <div className="textured-background ">
                    <div className="stats-container ">
                        <div className="stat1" data-aos="fade-right" data-aos-duration="1500">
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-center ABC text-center">
                                    <div className='col-sm-9 col-10'>
                                        <p className='fs-6'>We have successfully managed complex cases, providing personalized solutions that significantly improve patients' mobility and quality of life.</p>
                                    </div>
                                    <div className='col-sm-3 col-10'>
                                        <div className="stat mx-auto">
                                            <div className="stat-number">+<CountUp start={0} end={48} enableScrollSpy={true} separator="" /></div>
                                            <div className="stat-label">EXPERIENCE</div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stat2 " data-aos="fade-right" data-aos-duration="1500">
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-center ABC text-center">
                                    <div className='col-sm-9 col-10'>
                                        <p className='fs-6'>We have achieved significant success in enhancing patient outcomes through innovative orthotic and prosthetic solutions.</p>
                                    </div>
                                    <div className='col-sm-3 col-10'>
                                        <div className="stat mx-auto">
                                            <div className="stat-number">+<CountUp start={0} end={36} enableScrollSpy={true} separator="" /></div>
                                            <div className="stat-label">SUCCESS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="stat3" data-aos="fade-right" data-aos-duration="1500">
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-center ABC text-center ">
                                    <div className='col-sm-9 col-10'>
                                        <p className='fs-6'>We have worked as a lead practitioner, collaborating closely with a multidisciplinary team of healthcare professionals to design and fit custom orthotic and prosthetic devices. </p>
                                    </div>
                                    <div className='col-sm-3 col-10'>
                                        <div className="stat mx-auto">
                                            <div className="stat-number">+<CountUp start={0} end={5} enableScrollSpy={true} separator="" />
                                            </div>
                                            <div className="stat-label">YEARS</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="solid-background " data-aos="fade-left" data-aos-duration="1500">
                    <div className="col-8 countercontent">
                        <div className="container"><div className="impact-text">
                            <h1 className='headtittle text-white' style={{fontSize:"80px"}}>Our Impact</h1>
                            <p className='fs-6'>The International Society for Prosthetics and Orthotics (ISPO) aims to improve the quality of life by developing global rehabilitation practice of prosthetic, orthotic, mobility, and assistive technology.</p>
                            <div className="">
                                <div className="stat-number"><h1 className="display-1 fw-bold"><CountUp start={0} end={3000} enableScrollSpy={true} separator="" />+</h1></div>
                                <div className="stat-label">MEMBERS</div>
                            </div>
                        </div></div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Counter
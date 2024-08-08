import React from 'react'
import '../assets/css/SuccessStory.css'
import Extra from './Extra';
import HOCcomponent from './HOCcomponent';
import { Carousel } from 'react-bootstrap';

function SuccessStory() {
    return (
        <>
            <div className="success_bgimages">
                <div className='homebg_image'>
                    <div className='m-0 p-0 colorshad h-100 w-100 d-flex justify-content-end align-items-center '>
                        <div className='col-lg-9 col-md-9 col-10 mx-auto overHeight'>
                            <div className="overlay p-5" style={{ height: '100%' }}>
                                <h1 className="text-center textshadow lh-base" style={{ height: '50%' }}>
                                    {/* <TypeAnimation
                                        cursor={false}
                                        className='custom-type-animation-cursor  fw-bolder py-5 text-capitalize'
                                        sequence={[
                                            'empowering Healthier lives ', 3000,
                                            'success through innovation', 3000,
                                        ]}
                                        repeat={Infinity}
                                    /> */}
                                    <Carousel controls={false} indicators={false} interval={3000} duration={3000} data-aos="zoom-in" data-aos-duration="2000" className='overflow-hidden'>
                                        <Carousel.Item>
                                            <h1 className='text-center textshadow lh-base fw-bold'>Empowering Healthier lives</h1>
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <h1 className='text-center textshadow lh-base fw-bold'>Success Through Innovation</h1>
                                        </Carousel.Item>
                                    </Carousel>
                                </h1>
                                <p className="text-center fs-4 textshadowslogen fw-semibold text-capitalize">
                                Overcoming Challenges Together: Inspiring Success Stories
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

                <div className='container'>
                    <div className="row align-items-center justify-content-center py-5 overflow-hidden">
                        <div className='col-md-6 col-11 order-2 order-md-1 pt-md-0 py-4 overflow-hidden' data-aos="fade-right" data-aos-duration="1800">
                            <h1 className='display-4 fw-medium maincolor' >
                                <span >Real Talk  with Real Patients</span>
                            </h1>
                            <p className='lh-base textcolor'style={{textAlign:"justify"}}>
                                Ashutosh Prosthetics & Orthotics Visitor, Albert Perez, had the unique opportunity to meet with several patients
                                to share the stories of their journey as amputees, and their experience with SKY. They
                                shared their concerns, struggles, experiences, and successes. Their stories empower
                                new or future amputees to know that there is life after amputation!
                            </p>
                            <div className="row justify-content-end">
                                <p className='text-end col-7 lh-base text-danger fw-semibold'>
                                     Donald Young,
                                    Wilfredo “Wolf” Benjamin, Albert Perez,
                                    Stephanie Perez, Randal Carter
                                </p>
                            </div>
                        </div>
                        <div className='col-md-6 col-11 text-center order-1 order-md-2 overflow-hidden' data-aos="fade-left" data-aos-duration="1800">
                            <img src={require("../assets/images/close-up-man-with-mechanical-leg-running-sportsman-blue-shorts-white-sneakers-photographed-jog-sport-hobby-disability-concept_74855-22852.jpg")} alt="" className="img-fluid mx-auto rounded-5" />
                        </div>
                    </div>
                </div>
                {/* {/ <hr className='my-3' /> /} */}
                {/* <div className="container-fluid" >
                    <h1 className='display-4 w-75 mx-auto headtittle text-center' >
                        <span>Advance with Every Step</span>
                    </h1>
                    <div className="row align-items-center justify-content-evenly py-5 overflow-hidden">
                        {contentData.map((item, index) => (
                            <div
                                key={index}
                                className="col-lg-3 col-md-5 col-7 ms-2 me-1 col-10"
                                data-aos={item.aos}
                                data-aos-duration="2000"
                            >
                                <div>
                                    <div className="row align-items-center justify-content-center">
                                        <img
                                            src={item.img}
                                            alt=""
                                            className="object-fit-fill border border-2"
                                            style={{ height: '350px', width: '350px' }}
                                        />
                                    </div>
                                    <div className="container">
                                        <div className="shadow-lg py-2 rounded text-center px-2 bg-light" style={{ position: 'relative', bottom: '50px' }}>
                                            <h1 className="py-3 subtitle1 text-light px-4 fs-3">
                                                {item.title}
                                            </h1>
                                            <p className="fs-6 p-xlg-4 p-1">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div> */}
            </div>
            <Extra />
        </>
    )
}

const contentData = [
    {
        img: require('../assets/images/close-up-man-with-mechanical-leg-running-sportsman-blue-shorts-white-sneakers-photographed-jog-sport-hobby-disability-concept_74855-22852.jpg'),
        title: "Technological Advancements",
        description: "From carbon fiber limbs to bionic prosthetics, it's have greatly enhanced the functionality and comfort of prosthetic devices.",
        aos: "fade-right"
    },
    {
        img: require('../assets/images/G11.jpg'),
        title: "Enhanced Rehabilitation",
        description: "Innovative therapy techniques and holistic approaches improve the integration of prosthetics, aiding both physical and psychological adaptation.",
        aos: "fade-down"
    },
    {
        img: require('../assets/images/Prosthetist-_-socket-fit.jpg'),
        title: "Improved Accessibility",
        description: "Reductions in cost and initiatives in developing countries are making prosthetics more accessible to a broader population.",
        aos: "fade-left"
    },
    {
        img: require('../assets/images/Goggins-1.jpg'),
        title: "Innovative User Interface",
        description: "Cutting-edge developments in mind-controlled and sensory feedback prosthetics are pushing the boundaries of what's possible.",
        aos: "fade-right"
    },
    {
        img: require('../assets/images/Untitled_design-removebg-preview.png'),
        title: "Social and Personal Impact",
        description: "Prosthetics restore essential functions and independence, enabling individuals to engage fully in professional and personal activities.",
        aos: "fade-up"
    },
    {
        img: require('../assets/images/Cosmetic-glove-with-filed3-removebg-preview.png'),
        title: "Community and Advocacy",
        description: "Increased advocacy and community support are enhancing public awareness and fostering a supportive network for individuals using prosthetics.",
        aos: "fade-left"
    }
];


export default HOCcomponent(SuccessStory)
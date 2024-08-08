import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

function HomeCrousel() {
    return (
        <div>
            <div className="background-container">
                <Carousel fade={true} controls={false} indicators={false} interval={3000} className="background-carousel">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 vh-100 object-fit-cover"
                            src={require("../assets/images/2020-12-18.jpg")}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 vh-100 object-fit-cover"
                            src={require("../assets/images/hands-01 (2).jpg")}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 vh-100 object-fit-cover"
                            src={require("../assets/images/iStock-503744220.jpg")}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="content">
                    <div className='homebg_image'>
                        <div className='m-0 p-0 colorshad h-100 w-100 d-flex justify-content-end align-items-center '>
                            <div className='col-lg-9 col-md-9 col-10 mx-auto overHeight'>
                                <div className="overlay p-5" style={{ height: '100%' }}>
                                    <h1 className="text-center textshadow lh-base" style={{ height: '50%' }}>
                                        {/* <TypeAnimation
                                            cursor={false}
                                            className='custom-type-animation-cursor  fw-bolder text-capitalize'
                                            sequence={[
                                                'આશુતોષ પ્રોસ્થેટિક્સ એન્ડ ઓર્થોટિક્સ સેન્ટર', 500,
                                                'High-tech કૃત્રિમ પગ', 500,
                                                'High-tech કૃત્રિમ હાથ', 500,
                                                'ડાયાબિટીસ ફુટકેર ઓર્થોસીસ', 500,
                                                'પોડિયાટ્રી અને ઓર્થોફૂટ કેર', 500,
                                                'કસ્ટમાઈઝડ સ્પાઈનલ ઓર્થોસીસ', 500,
                                                'સિલિકોન જેલ કેર ટ્રીટમેન્ટ', 500,
                                            ]}
                                            repeat={Infinity}
                                        /> */}
                                        <Carousel controls={false} indicators={false} interval={3000} duration={3000} data-aos="zoom-in" data-aos-duration="2000" className='overflow-hidden'>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>આશુતોષ પ્રોસ્થેટિક્સ એન્ડ ઓર્થોટિક્સ સેન્ટર</h1>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>High-Tech કૃત્રિમ પગ</h1>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>High-Tech કૃત્રિમ હાથ</h1>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>ડાયાબિટીસ ફુટકેર ઓર્થોસીસ</h1>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>પોડિયાટ્રી અને ઓર્થોફૂટ કેર</h1>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>કસ્ટમાઇઝડ સ્પાઈનલ ઓર્થોસીસ</h1>
                                            </Carousel.Item>
                                            <Carousel.Item>
                                                <h1 className='text-center textshadow lh-base fw-bold'>સિલિકોન જેલ કેર ટ્રીટમેન્ટ</h1>
                                            </Carousel.Item>
                                        </Carousel>
                                    </h1>
                                    <p className="text-center py-4 fs-4 textshadowslogen fw-semibold text-capitalize">
                                        Fostering Unity and Well-being Across Communities
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default HomeCrousel
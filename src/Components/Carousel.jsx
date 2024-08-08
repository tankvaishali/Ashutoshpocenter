import React from 'react'
import { TypeAnimation } from 'react-type-animation'

function Carousel() {
  return (
    <div className="background-container">
    <Carousel fade={true} controls={false} indicators={false} interval={3000} className="background-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={require("../assets/images/1702306084235.jpeg")}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={require("../assets/images/Cosmetic-glove-with-filed3-removebg-preview.png")}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 vh-100"
          src={require("../assets/images/Prosthetist-_-socket-fit.jpg")}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <div className="content">
      <div className='homebg_image'>
        <div className='m-0 p-0 colorshad h-100 w-100 d-flex justify-content-end align-items-center '>
          <div className='col-lg-9 col-md-9 col-10 mx-auto'>
            <div className="overlay p-5 shadow-lg">

              <div className='homecontent text-center mx-auto fw-bold' style={{ color: '#ffffffc2' }}>
                <div className='textshadow textanimation my-auto'>
                  <TypeAnimation
                    cursor={false}
                    className='custom-type-animation-cursor display-5  fw-bolder py-5'
                    sequence={[
                      ' High-tech કૃત્રિમ પગ', 500,
                      'High-tech કૃત્રિમ હાથ', 500,
                      'ડાયાબિટીસ ફુટકેર ઓર્થોસીસ', 500,
                      'પોડિયાટ્રી અને ઓર્થોફૂટ કેર', 500,
                      'કસ્ટમાઈઝડ સ્પાઈનલ ઓર્થોસીસ', 500,
                      ' Silicon Gel Care Treatment', 500,
                    ]}
                    repeat={Infinity}
                  />
                </div>
                <br />

                <div className='fs-5 textshadow'>
                  Highlight the skills, talents, and potential of individuals with disabilities
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  </div>
  )
}

export default Carousel
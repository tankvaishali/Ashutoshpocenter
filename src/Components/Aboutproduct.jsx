import React from 'react'

function Aboutproduct() {
    return (
        <>
            <div className='container'>
                <div className='row m-0 p-0 g-5 pb-5 mb-3'>
                    <div className='col-12 col-lg-6 ' data-aos="fade-up"
                        data-aos-duration="1800">
                        <div className='h-100 p-0 p-lg-5 d-flex flex-column justify-content-between'>
                            <div className='headoneline linetitle1'>About Our Prosthesis</div>
                            <div className='headtittle py-3'>Excellence In Prosthesis For Your Journey Ahead</div>
                            <div className='d-flex py-4 border-bottom border-2'>
                                <div className='fs-1 fw-bolder headtittle' style={{color:"#F17D28"}}>01.</div>
                                <div className='ps-4 pb-2'>
                                    <div className='fs-2 fw-medium headtittle'>High Comfort</div>
                                    <div className='contentdata fs-6 py-1'>High-performance prostheses are engineered to exceed expectations, delivering unparalleled functionality and durability.</div>
                                </div>
                            </div>
                            <div className='d-flex py-4 border-bottom border-2'>
                                <div className='fs-1 fw-bolder headtittle' style={{color:"#F17D28"}}>02.</div>
                                <div className='ps-4 pb-2'>
                                    <div className='fs-2 fw-medium headtittle'>Lifetime Support</div>
                                    <div className='contentdata fs-6 py-1'>Lifetime support for your prosthetic needs ensures ongoing care and assistance throughout your journey.</div>
                                </div>
                            </div>
                            <div className='d-flex py-4 border-bottom border-2'>
                                <div className='fs-1 fw-bolder headtittle' style={{color:"#F17D28"}}>03.</div>
                                <div className='ps-4 pb-2'>
                                    <div className='fs-2 fw-medium headtittle'>Eco Materials</div>
                                    <div className='contentdata fs-6 py-1'>Eco-materials into prostheses, we aim to minimize carbon footprints while maintaining high standards of performance and comfort.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6 ' data-aos="fade-down"
                        data-aos-duration="1800">
                        <div className='h-100'>
                            <img src={require("../assets/images/b9b570385804e1f125251e09ee905d84.png")} alt="" className='img-fluid w-100 h-100 object-fit-cover rounded-5' />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Aboutproduct
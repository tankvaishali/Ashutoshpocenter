import React, { useEffect, useState } from 'react'
import { FaAnglesRight } from 'react-icons/fa6'

function Aboutuscontent() {
    const [moveRight, setMoveRight] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMoveRight(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            <div class=" about py-5 py-md-0 py-lg-5 mt-5 overflow-x-hidden">
                <div class="container">
                    <div class="row g-5 overflow-hidden">
                        <div class="col-12 col-md-12 col-lg-7 ">
                            <div class="about-img overflow-hidden" data-aos="fade-right" data-aos-duration="1800">
                                <img src={require("../assets/images/About.jpg")} class="img-fluid rounded w-100 h-100 object-fit-cover aboutimg " alt="" />
                                <div class="about-img-inner text-end ms-auto overflow-hidden" data-aos="zoom-in" data-aos-duration="1800">
                                    <img src={require("../assets/images/images (32).png")} class="img-fluid rounded-circle w-100 h-100 object-fit-cover" style={{ border: "10px solid white" }} alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 col-lg-5 overflow-hidden d-flex flex-column justify-content-between" data-aos="fade-left" data-aos-duration="1800">
                            <div class="section-title text-start  " style={{ height: "100%" }}>
                                <h4 class="headoneline aboutus pe-3 mb-1 linetitle1" style={{ color: "#F17D28" }}>About Us</h4>
                                <h1 class="headtittle mb-4 pt-3">We Are Ready To Help Improve Your Treatment.</h1>
                                <p class="mb-4 text-secondary" style={{ textAlign: "justify" }}> Our dedicated team of professionals is committed to enhancing your recovery journey through personalized and innovative care.</p>
                                <div class="mb-4">
                                    <p class="fs-6" style={{ color: "#2d2d51", fontWeight: "500" }}><FaAnglesRight style={{ color: "#F17D28" }} /> We are always here to enhance your treatment.</p>
                                    <p class="fs-6" style={{ color: "#2d2d51", fontWeight: "500" }}><FaAnglesRight style={{ color: "#F17D28" }} /> We provide the best care and improve your well-being</p>
                                    <p class="fs-6" style={{ color: "#2d2d51", fontWeight: "500" }}><FaAnglesRight style={{ color: "#F17D28" }} /> We provide exceptional care every step. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutuscontent
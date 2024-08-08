import { Button, styled } from "@mui/material";
import { purple } from "@mui/material/colors";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import Slider from "react-slick";

const data = [
  {
    img: require("../assets/images/images (10) (1).png"),
    h1: "78$",
    p: "Finger Splints",
  },
  {
    img: require("../assets/images/images (15).png"),
    h1: "78$",
    p: "Rubber Footwear",
  },
  {
    img: require("../assets/images/images (18).png"),
    h1: "78$",
    p: "Blue Poron And EVA GentleStep Insole",
  },
  {
    img: require("../assets/images/images (20).png"),
    h1: "78$",
    p: "Henry Colton Orthotic Arch",
  },
  {
    img: require("../assets/images/images (31).png"),
    h1: "78$",
    p: "Electric Wheelchairs",
  },
  {
    img: require("../assets/images/images (5).png"),
    h1: "78$",
    p: "Outriggers",
  },
  {
    img: require("../assets/images/images (16).png"),
    h1: "78$",
    p: "Carbon Fiber Unisex CROW Walker",
  },
  {
    img: require("../assets/images/images (27).png"),
    h1: "78$",
    p: "Ultra Knee Support With Bilateral Hinges",
  },
];

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: "#25d366",
  borderRadius: "30px",
  transition: "all 1s",
  padding: "11px",
  "&:hover": {
    backgroundColor: "green",
  },
}));

const phoneNumber = "+918799454754";

const Products = () => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    swipe: false,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const handleWhatsAppClick = (item) => {
    const message = `Hello, I would like to inquire about the product\n\nName: ${item.p}`;
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <div>
      <div className="container py-3">
        <h1 className="text-capatilize headtittle text-center">Our Products</h1>
        <div className="row align-items-center justify-content-center">
          <Slider {...settings} className="product_slickdot">
            {data.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-6 col-sm-8 text-center p-3 Hover mb-5"
                data-aos="zoom-in"
                data-aos-duration="1800"
              >
                <div className="border p-3 rounded-4 ProductHover">
                  <img
                    src={item.img}
                    alt=""
                    className="rounded-4 w-75 h-100 mx-auto"
                  />
                  <div className="pt-3">
                    <p
                      className="contentdata fs-6 fw-bold"
                      style={{ height: "38px" }}
                    >
                      {item.p}
                    </p>
                  </div>
                  <div className="text-center">
                    <ColorButton onClick={() => handleWhatsAppClick(item)}>
                      <FaWhatsapp className="success fs-3 me-2" /> WhatsApp
                    </ColorButton>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Products;

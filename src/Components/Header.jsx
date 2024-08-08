import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-datepicker/dist/react-datepicker.css';

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showWhatsAppButton, setShowWhatsAppButton] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowWhatsAppButton(true);
  };

  const formatDateTime = (date) => {
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const handleWhatsAppClick = () => {
    if (selectedDate) {
      const formattedDate = formatDateTime(selectedDate);
      const message = `Requesting an appointment on ${formattedDate} , please confirm availability.`;
      const whatsappUrl = `https://wa.me/8799454754?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg position-sticky top-0 z-3 bg-white ${scrollPosition > 0 ? "bg-white shadow" : "navbar-transparent "}`}
        style={{ transition: " all 0.3s ease-in-out" }}>
        <div className="container">
          <Link to={"/"} className="nav-link">
            <img src={require("../assets/images/Ashutosh.png")} alt="" className="img-fluid logoset object-fit-contain" />
          </Link>

          <button className="btn order-2 d-lg-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
            <span className="navbar-toggler-icon fs-5 shadow"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink to={"/"} className="nav-link headmenu maincolor mx-2 fw-medium pe-2 " aria-current="page" > Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/aboutus"} className="nav-link headmenu maincolor mx-2 fw-medium pe-2">About Us</NavLink>
              </li>
              <li className="nav-item">
                <div class="dropdown">
                  <div className="nav-link headmenu maincolor mx-2 fw-medium pe-2 dropbtn border-0" style={{ cursor: "pointer" }}>Prosthesis</div>
                  <div class="dropdown-content">
                    <NavLink to={"/prosthesisleg"} className="nav-link fw-medium p-3 ">Prosthesis Leg</NavLink>
                    <NavLink to={"/prosthesishand"} className="nav-link fw-medium p-3 ">Prosthesis Hand</NavLink>
                    <NavLink to={"/CustomiseOrtho"} className="nav-link fw-medium p-3 ">Customise Orthosis{" "}</NavLink>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to={"/SuccessStory"} className="nav-link headmenu maincolor mx-2 fw-medium pe-2" > Success Stories </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/contactus"} className="nav-link headmenu maincolor mx-2 fw-medium pe-2">Contact Us</NavLink>
              </li>
            </ul>
          </div>
          <div className=" order-1">
            <button
              className="btn_hover p-2 px-3 fw-medium w-100 border-0 rounded-3 shadow text-center text-white fs-6"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              Appointment
            </button>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title className="headtittle fs-4 text-capitalize">Select Appointment Date and Time</Modal.Title>
              </Modal.Header>
              <Modal.Body className="m-auto timedate_css">
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  showTimeSelect
                  dateFormat="Pp"
                  minDate={new Date()}
                  placeholderText="Select A Date And Time"
                  className="py-3 px-auto Datepickerdate text-center"
                />
              </Modal.Body>
              <Modal.Footer>
                <button
                  className="btn_hover p-2 fw-medium w-100 border-0 rounded-3 shadow text-center text-white fs-5"
                  onClick={handleWhatsAppClick}
                  style={{ cursor: "pointer" }}
                >
                  Confirm Appointment
                </button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </nav>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1"
        id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <Link to={"/"} className="nav-link">
            <img src={require("../assets/images/Ashutosh.png")} alt="" className="img-fluid logoset object-fit-contain" />
          </Link>
          <button type="button" className="btn-close p-3 capbg_color rounded-circle" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <NavLink to={"/"} className="nav-link headmenu maincolor fw-medium pe-2 py-2 fs-6" aria-current="page">Home</NavLink>
          <NavLink to={"/aboutus"} className="nav-link headmenu maincolor fw-medium pe-2 py-2 fs-6">About Us</NavLink>
          <div className="dropdown ">
            <div className="nav-link headmenu maincolor fw-medium pe-2 py-2 fs-6" type="button" data-bs-toggle="dropdown" aria-expanded="false">Prosthesis</div>
            <ul class="dropdown-menu  dropdown-content">
              <li><NavLink to={"/prosthesisleg"} className=" nav-link dropdown-item text-white" >Prosthesis Leg</NavLink></li>
              <li><NavLink to={"/prosthesishand"} className=" nav-link dropdown-item text-white" >Prosthesis Hand</NavLink></li>
              <li><NavLink to={"/CustomiseOrtho"} className=" nav-link dropdown-item text-white" >Customise Orthosis</NavLink></li>
            </ul>
          </div>
          <NavLink to={"/SuccessStory"} className="nav-link headmenu maincolor fw-medium pe-2 py-2 fs-6">Success Stories</NavLink>
          <NavLink to={"/contactus"} className="nav-link headmenu maincolor fw-medium pe-2 py-2 fs-6">Contact Us</NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;

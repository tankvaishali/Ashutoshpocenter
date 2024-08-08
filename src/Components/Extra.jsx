import React from "react";
import "../assets/css/Extra.css";
import { MdPlayCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

const itemData = [
  {
    img: require("../assets/images/Orthotic-Devices-Orthotic-Splints-and-Orthopedic-Braces-and-Support-Market-1024x683.jpg"),
    title: "Bed",
  },
  {
    img: require("../assets/images/Prosthetist-_-socket-fit.jpg"),
    title: "Kitchen",
  },
  {
    img: require("../assets/images/front-view-woman-with-prosthetic-arm_23-2149832752.jpg"),
    title: "Chairs",
  },
  {
    img: require("../assets/images/194-1943739_indian-doctor-hd-png-download.png"),
    title: "Sink",
  },
  {
    img: require("../assets/images/Goggins-1.jpg"),
    title: "Books",
  },
  {
    img: require("../assets/images/depositphotos_315592138-stock-photo-artificial-prosthesis-hand-at-doctor.jpg"),
    title: "Doors",
  },
  {
    img: require("../assets/images/medical-stethoscope-white-surface_53876-95031.jpg"),
    title: "Coffee",
  },
  {
    img: require("../assets/images/close-up-man-with-mechanical-leg-running-sportsman-blue-shorts-white-sneakers-photographed-jog-sport-hobby-disability-concept_74855-22852.jpg"),
    title: "Candle",
  },
];

function Extra() {
  const theme = useTheme();
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const mdScreen = useMediaQuery(theme.breakpoints.down('md'));
  let cols = 3;
  if (mdScreen) { cols = 2; }
  if (smScreen) { cols = 1; }
  return (
    <div>
      <div className="headtittle container text-center py-5 text-capitalize">
        Every recovery is a conquest!
      </div>
      <div className="container">
        <ImageList variant="masonry" className="col-10 mx-auto overflow-hidden" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img} className="excard" >
              <Link
                to={"/"}
                className="text-decoration-none text-light"
                target="_blank"
              >
                <img
                  srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=161&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  className="excard-img"
                />
                <div className="excard-body">
                  <MdPlayCircle className="display-1 blink rounded-circle" style={{ background: "white", color: "#2d2d51" }} />
                </div>
              </Link>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}

export default Extra;

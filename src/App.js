import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import './App.css';


import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Contactus from "./Components/Contactus";
import ProsthesisLeg from "./Components/ProsthesisLeg";
import Prosthesishand from "./Components/Prosthesishand";
import ProsthesisArm from "./Components/ProsthesisArm";
import AboutUs from "./Components/AboutUs";
import ScrollToTop from "./Components/ScrollToTop";
import SuccessStory from "./Components/SuccessStory";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter >
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/prosthesisleg" element={<ProsthesisLeg />} />
            <Route path="/prosthesishand" element={<Prosthesishand />} />
            <Route path="/CustomiseOrtho" element={<ProsthesisArm />} />
            <Route path="/SuccessStory" element={<SuccessStory />} />

            <Route path="/contactus" element={<Contactus />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;

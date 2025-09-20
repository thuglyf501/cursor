import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ImageTrail from "./Components/ImageTrail.jsx";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import m1 from "./assets/m1.jpg";
import m2 from "./assets/m2.jpg";
import m3 from "./assets/m3.jpg";
import m4 from "./assets/m4.jpg";
import m5 from "./assets/m5.jpg";
import m6 from "./assets/m6.jpg";
import m7 from "./assets/m7.jpg";
import m8 from "./assets/m8.jpg";


  function App() {
    return (
      <div
        style={{ height: "100vh", position: "relative", overflow: "hidden",width:"100vw" }}
      >
        <ImageTrail
          items={[
            m1, m2, m3, m4, m5, m6, m7, m8,
          ]}
          variant={1}
        />
      </div>
    );
  }
export default App;

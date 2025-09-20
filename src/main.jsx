import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SplashCursor from './Components/SplashCursor.jsx'

import { BrowserRouter, Routes, Route } from "react-router";





createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashCursor />} />
      </Routes>
    </BrowserRouter>
    <App />
  </StrictMode>
);

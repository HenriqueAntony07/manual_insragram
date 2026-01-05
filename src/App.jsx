import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Slide1 from "./pages/Slide1.jsx";
import Slide2 from "./pages/Slide2.jsx";
import Slide3 from "./pages/Slide3.jsx";
import Slide4 from "./pages/Slide4.jsx";
import Slide5 from "./pages/Slide5.jsx";
import Slide6 from "./pages/Slide6.jsx";
import Slide7 from "./pages/Slide7.jsx";
import Slide8 from "./pages/Slide8.jsx";
import Slide9 from "./pages/Slide9.jsx";

const ORDER = [
  "/",
  "/algoritmo",
  "/conteudo",
  "/formatos",
  "/legendas",
  "/hashtags",
  "/horarios",
  "/metricas",
  "/checklist",
];

function useKeyboardNav() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(e) {
      const t = e.target;
      const isTyping =
        t?.tagName === "INPUT" ||
        t?.tagName === "TEXTAREA" ||
        t?.isContentEditable;
      if (isTyping) return;

      const idx = ORDER.indexOf(location.pathname);
      if (idx === -1) return;

      if (e.key === "ArrowRight") {
        navigate(ORDER[Math.min(idx + 1, ORDER.length - 1)]);
      } else if (e.key === "ArrowLeft") {
        navigate(ORDER[Math.max(idx - 1, 0)]);
      } else if (e.key === "Home") {
        navigate("/");
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [location.pathname, navigate]);
}

export default function App() {
  useKeyboardNav();

  return (
    <Routes>
      <Route path="/" element={<Slide1 />} />
      <Route path="/algoritmo" element={<Slide2 />} />
      <Route path="/conteudo" element={<Slide3 />} />
      <Route path="/formatos" element={<Slide4 />} />
      <Route path="/legendas" element={<Slide5 />} />
      <Route path="/hashtags" element={<Slide6 />} />
      <Route path="/horarios" element={<Slide7 />} />
      <Route path="/metricas" element={<Slide8 />} />
      <Route path="/checklist" element={<Slide9 />} />
    </Routes>
  );
}

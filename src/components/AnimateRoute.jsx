import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import App from "../App";
import { Contactus, Cybernews, Obs, Events, Socials } from "../pages";
import { News1, News2, News3, News4 } from "../pages/cyber news/content";
import { AnimatePresence } from "framer-motion";

const AnimateRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location.pathname}>
        <Route index element={<App />} />
        <Route path="home" element={<App />} />
        <Route path="cybernews" element={<Cybernews />} />
        <Route path="officebearers" element={<Obs />} />
        <Route path="events" element={<Events />} />
        <Route path="socials" element={<Socials />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="News1" element={<News1 />} />
        <Route path="News2" element={<News2 />} />
        <Route path="News3" element={<News3 />} />
        <Route path="News4" element={<News4 />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoute;

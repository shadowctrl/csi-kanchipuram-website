import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import App from "../App";

const AnimateRoute = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location.pathname}>
        <Route index element={<App />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimateRoute;

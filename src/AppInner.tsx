import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.component";
import BreedDetails from "./pages/breedDetails/BreedDetails.component";
import Favorites from "./pages/favorites/Favorites.component";
import Home from "./pages/home/Home.component";

const AppInner = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="breedDetails" element={<BreedDetails />} />
        <Route path="favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppInner;

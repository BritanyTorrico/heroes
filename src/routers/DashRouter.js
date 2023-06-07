import React from "react";
import { Navbar } from "../components/ui/NavBar";
import { Route, Routes } from "react-router-dom";
import { MarvelPage } from "../components/marvel/MarvelPage";
import { DcPage } from "../components/dc/DcPage";
import { HeroesPage } from "../components/heroes/HeroesPage";
import { SearchPage } from "../components/search/SearchPage";

export const DashRouter = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <Routes>
        <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />
          <Route path="hero/:id" element={<HeroesPage />} />
          <Route path="search/:palabra?" element={<SearchPage />} />
        
        </Routes>
      </div>
    </>
  );
};

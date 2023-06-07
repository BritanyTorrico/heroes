import React, { useState } from "react";
import { HeroCard } from "../heroes/HeroCard";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";

export const SearchPage = () => {
  const [heroesFiltered, setHeroesFiltered] = useState([]);
  const [formValues, handleInputChange] = useForm({
    searchText: "",
  });

  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    setHeroesFiltered(getHeroesByName(searchText));
  };
  return (
    <div>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              placeholder="Find your heroe"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button type="submit" className="btn btn-primary m-1 btn-block">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
          {searchText === "" && (
            <div className="alert alert-danger">Search a hero...</div>
          )}
          { (searchText !== "" && heroesFiltered.length === 0) && 
            <div className="alert alert-danger">There is no a hero with "{searchText}"</div>
          }
        </div>
      </div>
    </div>
  );
};

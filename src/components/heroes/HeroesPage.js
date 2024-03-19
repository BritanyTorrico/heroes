import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getHeroesById } from "../../selectors/getHeroesById";

export const HeroesPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero=useMemo(() =>  getHeroesById(id), [id])
  

  if (!hero) {
    return navigate("/login");
  }
  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../heroes/assets/heroes/${id}.jpg`}
         
         className="img-thumbnail animate__animated animate__fadeInLeft"
        alt={superhero}/>
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> {alter_ego}</li>
          <li className="list-group-item"> <b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"> <b>First Appearance:</b> {first_appearance}</li>
        </ul>
        <h5> Characters</h5>
        <p>{characters}</p>
        <button className="btn btn-primary">Return</button>

      </div>
    </div>
  );
};


import React, { useState, useEffect } from "react";
import BiereCard from "./BiereCard";
import axios from "axios";

function Home() {
  //useStates pour mettre à jour le tableau qui est vide avec les données API
  const [bieres, setBiere] = useState([]);

  //Appel API de toute la liste des bieres
  //Ne pas oublier le useEffect avec un tableau vide à la fin
  //sinon ça donne une boucle à l'infini.
  useEffect(() => {
    axios
      .get("https://api.punkapi.com/v2/beers")
      .then((response) => response.data)
      .then((data) => {
        setBiere(data);
      });
  }, []);

  return (
    <div className="App">
      {/* rendu conditionnel lors d'un appel a l'API;
      pour afficher les resulats une fois arrivé. */}
      {bieres && (
        <>
          {/* Map pour afficher chaque biere dans une BiereCard, 
        afin d'afficher les valeurs que l'on demande dans chaque BiereCard */}
          {bieres.map((biere) => (
            <BiereCard
              key={biere.id}
              name={biere.name}
              image_url={biere.image_url}
              tagline={biere.tagline}
              id={biere.id}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default Home;

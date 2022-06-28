import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

//affichage d'une biere choisi dans la page avec des infos sur la biere
const BiereDetail = () => {
  //useStates pour mettre à jour le tableau qui est vide avec les données API
  const [bibine, setBibine] = useState({});

  //Suite de la route à segment dynamique;
  //ne pas oublier de mettre userParams en haut de la page
  const { beerId } = useParams();

  useEffect(() => {
    //   function OneBiere() {
    axios
      //ne pas oublier de mettre le params afin d'avoir que la bierre que l'on veut afficher
      .get(`https://api.punkapi.com/v2/beers/${beerId}`)
      .then((response) => response.data)
      .then((data) => {
        //nous recuperons que les data de l'indice 0
        setBibine(data[0]);
      });
  }, []);

  //j'affiche les infos de la biere que j'ai choisi.
  return (
    <div>
      <h2>{bibine.name}</h2>
      <img src={bibine.image_url} alt="biere" />
      <p>{bibine.description}</p>
      {/* je reviens sur la page avec toutes les bieres */}
      <Link to="/">Toutes les bieres</Link>
    </div>
  );
};

export default BiereDetail;

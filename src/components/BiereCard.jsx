import React from "react";
import { Link } from "react-router-dom";

// affichage de chaque biere avec les themes choisis
const BiereCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image_url} alt="biere" />
      <p>{props.tagline}</p>
      {/* Lien pour afficher la biere avec plus de detail;
      on recupere le id pour l'afficher */}
      <Link to={`/${props.id}`}> go biere</Link>
    </div>
  );
};

export default BiereCard;

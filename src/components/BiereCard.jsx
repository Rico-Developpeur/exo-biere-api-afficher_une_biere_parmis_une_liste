import React from "react";
import { Link } from "react-router-dom";

const BiereCard = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image_url} alt="biere" />
      <p>{props.tagline}</p>
      <Link to={`/${props.id}`}> go biere</Link>
    </div>
  );
};

export default BiereCard;

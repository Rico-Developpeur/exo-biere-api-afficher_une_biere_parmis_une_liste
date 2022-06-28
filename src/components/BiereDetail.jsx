import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const BiereDetail = () => {
  const [bibine, setBibine] = useState({});
  const { beerId } = useParams();

  useEffect(() => {
    //   function OneBiere() {
    axios
      .get(`https://api.punkapi.com/v2/beers/${beerId}`)
      // Extract the DATA from the received response
      .then((response) => response.data)
      .then((data) => {
        setBibine(data[0]);
      });
  }, []);

  //   OneBiere();

  return (
    <div>
      <h2>{bibine.name}</h2>
      <img src={bibine.image_url} alt="biere" />
      <p>{bibine.description}</p>
      <Link to="/">Home</Link>
    </div>
  );
};

export default BiereDetail;

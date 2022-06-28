import React, { useState, useEffect } from "react";
import BiereCard from "./BiereCard";
import axios from "axios";

function Home() {
  const [bieres, setBiere] = useState([]);

  useEffect(() => {
    // const biereListes = () => {
    // Send the request
    axios
      .get("https://api.punkapi.com/v2/beers")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setBiere(data);
      });
    // };
    // biereListes();
  }, []);

  // console.log(bieres);

  return (
    <div className="App">
      {bieres.map((biere) => (
        <BiereCard
          key={biere.id}
          name={biere.name}
          image_url={biere.image_url}
          tagline={biere.tagline}
          id={biere.id}
        />
      ))}
    </div>
  );
}

export default Home;

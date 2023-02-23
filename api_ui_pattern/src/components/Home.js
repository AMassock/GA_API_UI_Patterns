import React, { useState, useEffect } from "react";
import Description from "./Description";
import './Home.css';

export default function Home () {
  const [currentPoke, setCurrentPoke] = useState(0);
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(data => {
        setPokeData(data.results);
      });
  }, []);

  const nextPoke = () => {
    setCurrentPoke((currentPoke + 1) % pokeData.length);
  };

  const prevPoke = () => {
    setCurrentPoke((currentPoke + pokeData.length - 1) % pokeData.length);
  };

  if (!pokeData.length) {
    return <div>Loading...</div>;
  };

  const name = pokeData[currentPoke].name.toUpperCase();  

  return (
    <div className="container">
      <h3 className="name">{name}</h3>
        <img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${currentPoke + 1}.png`} alt={pokeData[currentPoke].name} />
        <Description index={currentPoke} />
        <button className="prev-arrow" onClick={prevPoke}>&#9664;</button>
        <button className="next-arrow" onClick={nextPoke}>&#9654;</button>
    </div>

  );
};
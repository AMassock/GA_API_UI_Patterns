import React, { useState, useEffect } from "react";

export default function Description (props) {
    const { index } = props;
    const currentPoke = index + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${currentPoke}/`;
    const [pokeFull, setPokeFull] = useState(url);
    
    useEffect(() => {
    (async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            setPokeFull(json)
            // console.log('json:', json);
        } catch (error) {
            console.log('error:', error);
        }
        })()
    }, [url])

    if (pokeFull === 'https://pokeapi.co/api/v2/pokemon/1/') {
        return <div>Loading...</div>;
      };
    // console.log('url:', url);

    console.log('pokeFull:', pokeFull);
    const type = pokeFull.types[0].type.name;
    const name = pokeFull.name;
    const move1 = pokeFull.moves[0].move.name;
    const move2 = pokeFull.moves[1].move.name;
    const move3 = pokeFull.moves[2].move.name;
    const moves = `${move1}, ${move2}, and ${move3}`


    // console.log(name);

      return(
        // <p>test</p>
        <p>{name} is a {type} type Pokémon. {name}'s moves are {moves}</p>
      )
}

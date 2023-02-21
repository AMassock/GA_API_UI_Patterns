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


    // console.log('url:', url);

    // console.log('pokeFull:', pokeFull);
    const type = pokeFull.types[0].type.name;
    const name = pokeFull.name;

    // console.log(name);

      return(
        // <p>test</p>
        <p>{name} is a {type} type Pokémon.</p>
      )
}

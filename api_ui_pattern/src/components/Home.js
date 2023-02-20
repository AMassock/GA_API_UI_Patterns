import Modal from "../Modal";
import { useEffect, useState } from "react";

export default function Home (props){
    // console.log('Button:', props);
    const [openModal, setOpenModal] = useState(false);
    const [pokeUrl, setPokeUrl] = useState([]);
    

    let allPoke = props.poke.map((poke, i) => {
        const name = poke.name
        const pokeURL = `https://pokeapi.co/api/v2/pokemon/${name}/`

        const fetchData = async () => {
            try {
              const response = await fetch(pokeURL);
              const json = await response.json();
              const data = setPokeUrl(json); 
              console.log(pokeUrl);
            } catch (error) {
              console.log("error", error);
            }
          };

        return(
            <div>
                <button key={name} onClick={() => fetchData()}>
                    {pokeURL}
                </button>
                <Modal open={openModal} onClose={() => setOpenModal(false)} pokeURL={pokeURL}/>
            </div>
        )
    });

    return(
        <div>
            { allPoke }
        </div>
    )

}
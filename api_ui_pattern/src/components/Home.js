import Modal from "../Modal";
import { useState } from "react";

export default function Home (props){
    // console.log('Button:', props);
    const [openModal, setOpenModal] = useState(false);


    
        // const pokeURL = `https://pokeapi.co/api/v2/pokemon/${name}/`;


    let allPoke = props.poke.map((poke, i) => {
        const name = poke.name
        // const url = poke.url
        const pokeURL = `https://pokeapi.co/api/v2/pokemon/${name}/`

        const fetchData = async () => {
            try {
              const response = await fetch(pokeURL);
              const json = await response.json();
              console.log(json);
              return json
            } catch (error) {
              console.log("error", error);
            }
            
          };
      
          fetchData();

        // console.log(poke);

        return(
            <div>
                <button key={name} onClick={() => setOpenModal(true)}>
                    {pokeURL}
                </button>
                <Modal open={openModal} onClose={() => setOpenModal(false)} pokeURL={pokeURL}/>
            </div>
        )
    });

    // console.log(allPoke[0]);
    // useEffect(() => {
    //     fetch(allPoke.pokeURL)
    //         .then((res) => res.json())
    //         .then((data) => setPokeId(data.results))
    //         .catch((err) => console.log('oop something went wrong', err))
    // }, [])

    // console.log(pokeId);

    // const pokeArray = []

    // for(const poke in allPoke) {
    //     pokeArray.push(
    //         <button
    //             key={poke}
    //             >{allPoke.pokeURL}
    //             </button>
    //     )
    // }

    return(
        <div>
            { allPoke }
        </div>
    )

}

// Possible for loop
// for(const pokeNum in allPoke) {
//     console.log(pokeURL);
//     for(let i = 0; i <= allPoke.length; i++) {
//         let URL = allPoke[i].url
//         console.log(URL);
//         return URL
//     }



//     console.log(URL);
//     let pokeURL = (pokeNum + 1)
//     let URL = `https://pokeapi.co/api/v2/pokemon/${pokeURL}`
//     console.log(URL);
// }
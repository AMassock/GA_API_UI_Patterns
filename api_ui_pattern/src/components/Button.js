export default function Button (props){
    // console.log('Button:', props);
    let allPoke = props.poke.map((poke, i) => {
        const name = poke.name
        const url = poke.url

        return(
            <div>
                <img src={url} />
                <a href={url}>{url}</a>
            </div>
        )
    });
    // console.log('Button:', allPoke);

    return(
        <div>
            <p>{allPoke}</p>
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
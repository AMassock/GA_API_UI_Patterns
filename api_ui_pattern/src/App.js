import './App.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=250';

  const [openModal, setOpenModal] = useState(false);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPokeList(data.results))
      .catch((err) => console.log('oop something went wrong', err))
    }, [])

    console.log(pokeList);

  return (
    <div className="App">
      <p>test</p>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
}

export default App;

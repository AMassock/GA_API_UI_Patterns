import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function App() {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=250'
  const [openModal, setOpenModal] = useState(false);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPokeList(data.data))
      .catch((err) => console.log('oop something went wrong', err))
    },[])

    console.log(pokeList);

  return (
    <div className="App">
      <p>test</p>
      <button onClick={() => setOpenModal(true)}>Open Modal</button>
      <Modal open={openModal} onClose={() => setOpenModal(false)}/>
    </div>
  );
}

export default App;

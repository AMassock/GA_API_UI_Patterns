import './App.css';
import Modal from './Modal';
import Home from './components/Home';
import { useState, useEffect } from 'react';
import { Layout } from './pages';

function App() {
  const URL = 'https://pokeapi.co/api/v2/pokemon?limit=151';

  const [openModal, setOpenModal] = useState(false);
  const [pokeList, setPokeList] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setPokeList(data.results))
      .catch((err) => console.log('oop something went wrong', err))
    }, [])

  return (
    <div className="App">
      <Layout />
      <Home poke={pokeList} onClick={() => setOpenModal(true)} />
    </div>
  );
}

export default App;

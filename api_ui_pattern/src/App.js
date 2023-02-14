import logo from './logo.svg';
import './App.css';
import Modal from './Modal';
import { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="App">
      <button>Modal</button>
      <Modal open={openModal} />
    </div>
  );
}

export default App;

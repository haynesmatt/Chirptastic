import { useState } from 'react';
import './App.css';
import AngryBirdsMultiple from './assets/angry-birds-multiple.png';
import NavBar from './components/NavBar'
import Forms from './components/Forms'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <h1>Welcome to Chirptastic!</h1>
      <img src={AngryBirdsMultiple} alt="Angry Birds" width="200px"/>
      <h2>Create a new Angry Bird below:</h2>
      <Forms />
    </div>
  )
}

export default App;
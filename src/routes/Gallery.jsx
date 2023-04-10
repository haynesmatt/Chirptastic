import { useState } from 'react';
import './Gallery.css';
import NavBar from '../components/NavBar'
import Card from '../components/Card'

function Gallery() {
  const [count, setCount] = useState(0);

  return (
    <div className="Gallery">
      <NavBar />
      <h1>Your Chirptastic Gallery</h1>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Gallery;
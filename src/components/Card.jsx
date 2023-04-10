import { useState } from 'react';
import AngryBirdTransparent from '../assets/angry-bird-transparent.webp';
import './Card.css';

function Card() {
  const [id, setID] = useState(0);

  return (
    <div className="Card">
      
      <img src={AngryBirdTransparent} alt="Angry Bird" width="150px"/>

      <div className='property'>
        <h3>Name of Bird: </h3>
        <h3 className='trait'>Robin</h3>
      </div>

      <div className='property'>
        <h3>Color of Bird: </h3>
        <h3 className='trait'>Red</h3>
      </div>
      
      <div className='property'>
        <h3>Double Damage on </h3>
        <h3 className='trait'>Wood</h3>
      </div>

      <button>Edit Bird</button>

    </div>
  )
}

export default Card;
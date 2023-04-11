import { useState } from 'react';
import AngryBirdTransparent from '../assets/angry-bird-transparent.webp';
import './Card.css';

function Card(props) {
  const [id, setID] = useState(0);

  return (
    <div className="Card">
      
      <img src={AngryBirdTransparent} alt="Angry Bird" width="150px"/>

      <div className='property'>
        <h3>Name of Bird: </h3>
        <h3 className='trait'>{props.name}</h3>
      </div>

      <div className='property'>
        <h3>Color of Bird: </h3>
        <h3 className='trait'>{props.color}</h3>
      </div>
      
      <div className='property'>
        <h3>Double Damage on </h3>
        <h3 className='trait'>{props.double_damage}</h3>
      </div>

      <div className='button-container'>
        <button className='edit-button'>Edit Bird</button>
        <button className='delete-button'>Delete Bird</button>
      </div>

    </div>
  )
}

export default Card;
import AngryBirdTransparent from '../assets/angry-bird-transparent.webp';
import './Card.css';
import { Link } from "react-router-dom";

function Card(props) {
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

        <Link to={`/edit/${props.id}`}>
          <button className='edit-button'>Edit Bird</button>
        </Link>

        <button className='delete-button'>Delete Bird</button>

      </div>

    </div>
  )
}

export default Card;
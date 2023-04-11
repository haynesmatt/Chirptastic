import './Forms.css'
import { supabase } from '../client'
import { useState } from 'react';

// to continue where i left off, i need to display data from the database to now to to a post card and load each post card (prev + next) with the spread operator

function Forms() {

    const [post, setPost] = useState({
        name: '',
        double_damage: '',
        color: ''
      });

    const handleTextInputInput = (event) => {
        const { value } = event.target;
        setPost(prevPost => ({
            ...prevPost,
            name: value
          }));
    }

    const handleOptionChange = (event) => {
        const { name, value } = event.target;
        setPost(prevPost => ({
          ...prevPost,
          [name]: value
        }));
    }

    const createPost = async (event) => {

        event.preventDefault();
    
        await supabase
            .from('Posts')
            .insert({ name: post.name, double_damage: post.double_damage, color: post.color })
            .select();
    
        window.location = '/';
    }



    return (
        <div className="Forms">

            <div className='forms'>

                <form className="nameForm">
                    <h3>Name:</h3>
                    <input type="text" name="name" onChange={handleTextInputInput}/>

                </form>

                <form className="doubleDamageForm">
                    <h3>Double Damage:</h3>
                    <select id="double_damage" name="double_damage" onChange={handleOptionChange}>
                        <option value="select_option">Select Option</option>
                        <option value="Wood">Wood</option>
                        <option value="Brick">Brick</option>
                        <option value="Metal">Metal</option>
                    </select>
                </form>

                <form className="colorForm">
                    <h3>Color:</h3>
                    <select id="color" name="color" onChange={handleOptionChange}>
                        <option value="select_option">Select Option</option>
                        <option value="Red">Red</option>
                        <option value="Yellow">Yellow</option>
                        <option value="Blue">Blue</option>
                        <option value="Green">Green</option>
                    </select>
                </form>
            </div>

            <input type="submit" value="Submit" className="action-button" onClick={createPost}/>

        </div>
    )
}

export default Forms
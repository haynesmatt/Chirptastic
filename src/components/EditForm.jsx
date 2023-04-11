import './Forms.css'
import { supabase } from '../client'
import { useState } from 'react';
import { useParams } from "react-router-dom";

function EditForm() {

    let id = useParams().id;

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

    const updatePost = async (event) => {

        event.preventDefault();
    
        await supabase
            .from('Posts')
            .update({ name: post.name, double_damage: post.double_damage, color: post.color })
            .eq('id', id);
    
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

            <input type="submit" value="Submit" className="action-button" onClick={updatePost}/>

        </div>
    )
}

export default EditForm
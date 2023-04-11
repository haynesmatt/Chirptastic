import { useEffect, useState } from 'react';
import AngryBirdTransparent from '../assets/angry-bird-transparent.webp';
import { useParams } from "react-router-dom";
import { supabase } from '../client'
import NavBar from '../components/NavBar';

const DetailsPage = () => {

    const [post, setPost] = useState([{
        id:1,
        name:"Robin",
        double_damage:"Brick",
        color:"Red"
    }])
    
    let id = useParams().id;
    console.log(post)

    useEffect (() => {
        const fetchPost = async () => {

            const { data } = await supabase
            .from('Posts')
            .select()
            .eq('id', id);

            setPost(data);
        }
        fetchPost();
    }, []);

    return (
        <div className='DetailsPage'>
            <NavBar />
            <img src={AngryBirdTransparent} alt="Angry Bird" width="350px"/>
            <h2>This is "{post[0].name}", a {post[0].color} Bird unique of its kind.</h2>
            <h2>Use this bird to deal double damage to {post[0].double_damage} Walls!</h2>
        </div>
    );
  };
  
  export default DetailsPage;
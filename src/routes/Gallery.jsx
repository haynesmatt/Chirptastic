import { useState, useEffect} from 'react';
import './Gallery.css';
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import { supabase } from '../client'

function Gallery() {

  const [posts, setPosts] = useState([{
        id: 0,
        name: '',
        double_damage: '',
        color: ''
      }]);

  useEffect(() => {
    const fetchPosts = async () => {
      const {data} = await supabase
        .from('Posts')
        .select()
        .order('created_at', { ascending: true })

        // set state of posts
        setPosts(data);
    }
    fetchPosts()
  }, [])

  return (
    <div className="Gallery">
      <NavBar />
      <h1>Your Chirptastic Gallery</h1>
      <div className="cards">
        {posts.map(post => (
          <Card name={post.name} color={post.color} double_damage={post.double_damage} />
        ))}
      </div>
    </div>
  )
}

export default Gallery;
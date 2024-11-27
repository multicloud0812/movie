import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'


const TitleCards = ({title, category}) => {

    const [apiData, setApiData] = useState([]);
    const cardsRef = useRef();

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZDk1MTM5NmM2MzFjNGNlMzdhYjdjY2YzOGFmMGJkMCIsIm5iZiI6MTczMjYxNDA4My4yMDYwNjYsInN1YiI6IjY3Mjg3NzkwNTU1ZTNlZmM4OWMzM2E4MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Sh6T1rCO0hY4qge2DrXU3ckV4IKZLWZJj05xlOzj9Ao'
  }
    };
    
    const handleWheel = (event)=>{
        event.preventDefalut();
        cardsRef.current.scrollLeft += event.deltaY;
    }
    
    useEffect(()=>{


    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel);
    },[])

  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Movies"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index)=>{
            return <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
                </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCards

import React, { useState, useEffect } from 'react'
import axios from "./axios"
import "./Row.css"

const base_url= "https://image.tmdb.org/t/p/original"

const Row = ({title,fetchUrl,isLargeRow}) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function fetchData(){
           const request = await axios.get(fetchUrl) 
           console.log(request.data.results);
           setMovies(request.data.results)
           return request;
        }  
        fetchData();
    },[])
  return (
    <>
    <h3 className='row1'>{title}</h3>
    <div className='Row'>
        {movies.map(movie=>{
            return <img key={movie.id} 
            className={`Row_Poster ${isLargeRow && "Row_PosterLarge"}`}
            src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} 
            alt={movie.name} />
        })}
    </div>
    </>
  )
}

export default Row
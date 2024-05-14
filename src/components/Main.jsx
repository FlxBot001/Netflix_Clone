import React, { useEffect, useState } from 'react'
import requests from '../Requests'
import axios from 'axios'

const Main = () => {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState(null)

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
            setMovies(response.data.results)
        })
    }, [])

    useEffect(() => {
        if (movies.length > 0) {
            const randomMovie = movies[Math.floor(Math.random() * movies.length)]
            setMovie(randomMovie)
        }
    }, [movies])

    return (
        <div className='text-white w-full h-[550px]'>
            <div className='w-full h-full'>
              <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                {movie && (
                  <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                )}
                <div>
                  <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Play</button>
                  <button className='border bg-gray-300 text-black border-gray-300 py-2 px-5'>Watch Later</button>
                </div>
            </div>
        </div>
    )
}

export default Main

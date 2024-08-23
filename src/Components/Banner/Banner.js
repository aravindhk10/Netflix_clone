import React, { useEffect, useState } from 'react'
import './Banner.css'
import {API_KEY, Image_Url} from '../../constants/constants'
import axios from '../../axios'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[Math.random() * response.data.results.length | 0])
        })
    }, [])
    
    return (
        <div style={{backgroundImage: `url( ${movie ? Image_Url+movie.
            backdrop_path : ''})`}} className='banner'>
            <div className="content">
                <h1 className="title">
                    {movie ? movie.title || movie.name : ''}
                </h1>
                <div className="banner_buttons">
                    <button className='buttton'>Play</button>
                    <button className='buttton'>My List</button>
                </div>
                <h1 className="description">
                    {movie ? movie.overview : ''}
                </h1>
            </div>
            <div className="fade_bottom">

            </div>
        </div>
    )
}

export default Banner
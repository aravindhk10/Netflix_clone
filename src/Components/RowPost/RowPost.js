import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, Image_Url } from '../../constants/constants'

function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlid, seturlid] = useState()
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovies(response.data.results)
    })

  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }
  }

  const handleMovie = (id)=>{
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length !== 0){
        seturlid(response.data.results[0])
      }else{
        console.log('array empty')
      }
    })
  }

  return (
    <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) =>
          <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${Image_Url + obj.
            backdrop_path}`} alt="poster" />
        )}

      </div>
      { urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  )
}

export default RowPost
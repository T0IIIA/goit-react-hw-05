import s from './MovieCast.module.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieCredits } from '../../servises/api'
import Loader from '../Loader/Loader'

const MovieCast = () => {
  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg'

  const { movieId } = useParams()
  const [movieCast, setMovieCast] = useState([])

  useEffect(() => {
    if (!movieId) return

    try {
      const getData = async () => {
        const data = await fetchMovieCredits(movieId)
        setMovieCast(data)
      }
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [movieId])


  if (!movieCast) {
    return <Loader />
  }
  return (
    <ul className={s.list}>
      {movieCast.map((person) => (
        <li key={person.id} className={s.item}>
          <img
            className={s.image}
            src={
              person.profile_path
                ? `https://image.tmdb.org/t/p/w200${person.profile_path}`
                : defaultImg
            }
            alt={`Photo ${person.name}`}
          />
          <div className={s.about}>
            <p className={s.name}>{person.name}</p>
            <p className={s.character}>{`character: ${person.character}`}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default MovieCast

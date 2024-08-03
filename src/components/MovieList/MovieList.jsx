import { Link } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({ movies = [] }) => {
  return (
    <>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <div className={s.link}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={s.img} />
            </div>
            <p className={s.text}>{movie.title}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList

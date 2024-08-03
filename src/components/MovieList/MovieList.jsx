import { Link } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({ movies = [] }) => {
  

  return (
    <>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`} className={s.link}>
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={`cover image of the movie "${movie.title}" `}
              />
            </Link>
            <p className={s.text}>{movie.title}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieList

import { Link, useLocation } from 'react-router-dom'
import s from './MovieList.module.css'

const MovieList = ({ movies = [] }) => {
  const location = useLocation()

  return (
    <>
      <ul className={s.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={s.item}>
            <Link to={`/movies/${movie.id}`} className={s.link} state={location}>
              <img
                className={s.img}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : '/public/alternative.png'
                }
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

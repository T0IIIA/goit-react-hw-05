import s from './MovieDetailsPage.module.css'
import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom'
import { Suspense, useEffect, useRef, useState } from 'react'
import { fetchMovieDetails } from '../../servises/api'
import Loader from '../../components/Loader/Loader'
import MovieDetailsMarkup from '../../components/MovieDetailsMarkup/MovieDetailsMarkup'
import clsx from 'clsx'

const buildLinkClass = ({ isActive }) => {
  return clsx(s.info_link, isActive && s.active)
}

const MovieDetailsPage = () => {
  const params = useParams()
  const location = useLocation()
  const [movie, setMovie] = useState(null)
  const backLink = useRef(location?.state ?? '/')


  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchMovieDetails(params.movieId)
        setMovie(data)
      }
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [params.movieId])

  if (!movie) {
    return <Loader />
  }
  return (
    <div className={s.container}>
      <Link to={backLink.current} className={s.backLink}>
        🔙
      </Link>
      <MovieDetailsMarkup movie={movie} />

      <ul className={s.info_list}>
        <li>
          <NavLink to='cast' className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink to='reviews' className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default MovieDetailsPage

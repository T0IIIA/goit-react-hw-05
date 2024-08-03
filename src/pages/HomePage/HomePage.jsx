import { useEffect, useState } from 'react'
import { fetchTrendingMovies } from '../../servises/api'
import MovieList from '../../components/MovieList/MovieList'
import s from './HomePage.module.css'

const HomePage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchTrendingMovies()
        setMovies(data.results)
      }
      getData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <div className={s.container}>
      <h2>Trending today</h2>

      <MovieList movies={movies} />
    </div>
  )
}

export default HomePage

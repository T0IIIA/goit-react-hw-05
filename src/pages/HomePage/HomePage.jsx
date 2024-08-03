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
        console.log(data);
        
      }
      getData()
    } catch (err) {
      console.log(err)
    }
  }, [])

  return (
    <>
      <h2>Trending today</h2>

      <MovieList movies={movies} />
    </>
  )
}

export default HomePage

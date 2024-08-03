import { useEffect, useState } from 'react'
import { fetchSearchMovies } from '../../servises/api'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'
import s from './MoviesPage.module.css'



const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    try {
      const getData = async () => {
        const data = await fetchSearchMovies(searchValue)
        setMovies(data.results)
      }
      getData()
    } catch (error) {
      console.log(error)
    }
  }, [searchValue])

  const handleSearchValue = (value) => {
    setSearchValue(value)
  }


  return (
    <>
      <SearchBar handleSearchValue={handleSearchValue} searchValue={searchValue} />

      <MovieList movies={movies} />
    </>
  )
}

export default MoviesPage

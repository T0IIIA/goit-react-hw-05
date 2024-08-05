import { useEffect, useState } from 'react'
import { fetchSearchMovies } from '../../servises/api'
import { useSearchParams } from 'react-router-dom'
import SearchBar from '../../components/SearchBar/SearchBar'
import MovieList from '../../components/MovieList/MovieList'


const MoviesPage = () => {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const filterValue = searchParams.get('query') ?? ''
  

  // ----------------------------
  useEffect(() => {
    const getData = async () => {
      if (!filterValue) {
        return
      }
        try {
          const data = await fetchSearchMovies(filterValue)
          setMovies(data.results)
        } catch (error) {
          console.log(error)
        }
    }
    getData()
  }, [filterValue])


  // ----------------------------
  const onSubmit = (e) => {
    e.preventDefault()
    const newValue = e.target.elements.search.value.trim()

    if (!newValue) {
      return setSearchParams({})
    }

    setSearchParams({ query: newValue })
    searchParams.set('query', newValue)
  }


  // ----------------------------
  return (
    <>
      <SearchBar onSubmit={onSubmit} filterValue={filterValue} />

      <MovieList movies={movies} />
    </>
  )
}

export default MoviesPage

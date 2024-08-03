import s from './SearchBr.module.css'

const SearchBar = ({ handleSearchValue, searchValue }) => {
  return (
    <>
      <input onChange={(e) => handleSearchValue(e.target.value)} value={searchValue} className={s.input} placeholder='Search' type='search' />
    </>
  )
}

export default SearchBar

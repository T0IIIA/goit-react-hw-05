import s from './SearchBr.module.css'

const SearchBar = ({ onSubmit, filterValue }) => {
  return (
    <form className={s.container} onSubmit={onSubmit}>
      <input
        defaultValue={filterValue}
        className={s.input}
        placeholder='Search'
        name='search'
        type='search'
      />
      <button className={s.button} type='submit'>
        Search
      </button>
    </form>
  )
}

export default SearchBar

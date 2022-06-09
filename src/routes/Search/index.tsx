import { ChangeEvent, FormEvent } from 'react'

import { useState, useMount, useRef } from 'hooks'

import List from './List'
import styles from './search.module.scss'
import { SearchIcon } from 'assets/svgs'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearchText(value)
  }

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  useMount(() => inputRef.current?.focus())

  return (
    <section className={styles.searchContainer}>
      <h2>원하는 플레이리스트가 없다면 더 찾아볼까요?</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input type='text' ref={inputRef} onChange={handleChangeSearchText} placeholder='검색해보기' />
          <button type='submit'>
            <SearchIcon />
          </button>
        </div>
      </form>
      <div className={styles.result}>
        {searchText && <h3>{searchText} 검색결과</h3>}
        <List searchText={searchText} />
      </div>
    </section>
  )
}
export default Search

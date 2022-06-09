import { ChangeEvent, FormEvent } from 'react'
import { useQuery } from 'react-query'

import { useState } from 'hooks'
import { getPlaylistApi } from 'services/playlist'

import PlayListCard from 'routes/_components/PlayListCard'
import styles from './search.module.scss'
import { SearchIcon } from 'assets/svgs'

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const [isActive, setIsActive] = useState(false)

  const { data, refetch } = useQuery(
    ['getSearchPlaylistApi', searchText],
    () =>
      getPlaylistApi({ keyword: searchText }).then((res) => {
        return res.data.items
      }),
    {
      enabled: !!(searchText.length > 0 && isActive),
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      cacheTime: 5 * 10 * 1000,
      staleTime: 5 * 10 * 1000,
      onSuccess: () => {
        setIsActive(false)
      },
    }
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsActive(true)
    refetch()
  }

  const handleChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.currentTarget.value)
  }

  return (
    <section className={styles.searchContainer}>
      <h2>원하는 플레이리스트가 없다면 더 찾아볼까요?</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <input type='text' onChange={handleChangeSearchText} placeholder='검색해보기' />
          <button type='submit'>
            <SearchIcon />
          </button>
        </div>
      </form>
      <div className={styles.result}>
        {data ? (
          <>
            <h3>검색결과</h3>
            <ul className={styles.playlists}>
              {data.map((item) => (
                <PlayListCard key={item.id.videoId} item={item} />
              ))}
            </ul>
          </>
        ) : (
          <h3>검색 결과가 없습니다.</h3>
        )}
      </div>
    </section>
  )
}
export default Search

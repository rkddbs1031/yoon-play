import { useQuery } from 'react-query'

import { getPlaylistApi } from 'services/playlist'

import Loading from 'routes/_components/Loading'
import PlayListCard from 'routes/_components/PlayListCard'
import styles from './search.module.scss'

interface IProps {
  searchText: string
}

const List = ({ searchText }: IProps) => {
  const { data, isLoading } = useQuery(
    ['getSearchPlaylistApi', searchText],
    () =>
      getPlaylistApi({ keyword: searchText }).then((res) => {
        return res.data.items
      }),
    {
      enabled: !!searchText,
      refetchOnWindowFocus: false,
      useErrorBoundary: true,
      cacheTime: 5 * 10 * 1000,
      staleTime: 5 * 10 * 1000,
    }
  )

  if (isLoading) return <Loading />

  return data ? (
    <ul className={styles.playlists}>
      {data.map((item) => (
        <PlayListCard key={item.id.videoId} item={item} />
      ))}
    </ul>
  ) : (
    <h3>검색 결과가 없습니다.</h3>
  )
}

export default List

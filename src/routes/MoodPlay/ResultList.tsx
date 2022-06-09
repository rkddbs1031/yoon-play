import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { getPlaylistApi } from 'services/playlist'
import { mainMoodItem, subMoodItem, genreItem } from 'states'

import Loading from 'routes/_components/Loading'
import PlayListCard from 'routes/_components/PlayListCard'
import styles from './moodPlay.module.scss'

const ResultList = () => {
  const genre = useRecoilValue(genreItem)
  const getMainMood = useRecoilValue(mainMoodItem)
  const getSubMood = useRecoilValue(subMoodItem)

  const { data, isLoading } = useQuery(
    ['getPlaylistApi', genre, getMainMood, getSubMood],
    () =>
      getPlaylistApi({ genre, mainMood: getMainMood, subMood: getSubMood }).then((res) => {
        return res.data.items
      }),
    {
      enabled: !!(genre && getMainMood && getSubMood),
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
  ) : null
}

export default ResultList

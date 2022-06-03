import { useQuery } from 'react-query'
import { useState } from 'hooks'

import { getPlaylistApi } from 'services/playlist'

import { useRecoilValue } from 'recoil'
import { mainMoodItem, subMoodItem } from 'states'

import { Emotion } from 'assets/svgs'
import styles from './moodPlay.module.scss'
import GenreList from './GenreList'
import PlayList from './PlayList'

const MoodPlay = () => {
  const [genre, setGenre] = useState('')
  const getMainMood = useRecoilValue(mainMoodItem)
  const getSubMood = useRecoilValue(subMoodItem)
  const onClickGenre = (val: string) => {
    if (val) setGenre(val)
  }

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

  return (
    <section className={styles.moodPlayContainer}>
      <h2>
        선택하신 기분, 분위기에 어울리는 장르들이에요! <Emotion />
      </h2>
      <GenreList onClickGenre={onClickGenre} />
      {data && (
        <ul className={styles.playlist}>
          {data.map((item) => (
            <PlayList key={item.id.videoId} item={item} />
          ))}
        </ul>
      )}
    </section>
  )
}
export default MoodPlay

import { useQuery } from 'react-query'
import { useRecoilValue } from 'recoil'

import { getPlaylistApi } from 'services/playlist'
import { mainMoodItem, subMoodItem, genreItem } from 'states'

import { Emotion } from 'assets/svgs'
import GenreList from './GenreList'
import PlayListCard from 'routes/_components/PlayListCard'
import styles from './moodPlay.module.scss'

const MoodPlay = () => {
  const genre = useRecoilValue(genreItem)
  const getMainMood = useRecoilValue(mainMoodItem)
  const getSubMood = useRecoilValue(subMoodItem)

  const { data } = useQuery(
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
      {getMainMood && getSubMood ? (
        <>
          <h2>
            선택하신 기분, 분위기에 어울리는 장르들이에요! <Emotion />
          </h2>
          <GenreList />
          {data ? (
            <div className={styles.result}>
              <h3>{getSubMood}</h3>
              <ul className={styles.playlists}>
                {data.map((item) => (
                  <PlayListCard key={item.id.videoId} item={item} />
                ))}
              </ul>
            </div>
          ) : (
            <h3>장르를 선택해 주세요!</h3>
          )}
        </>
      ) : (
        <h2>
          먼저 무드 선택을 해주세요! <Emotion />
        </h2>
      )}
    </section>
  )
}
export default MoodPlay

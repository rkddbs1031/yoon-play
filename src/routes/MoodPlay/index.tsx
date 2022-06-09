import { useRecoilValue, useResetRecoilState } from 'recoil'

import { useUnmount } from 'hooks'
import { mainMoodItem, subMoodItem, genreItem } from 'states'

import { EmotionIcon } from 'assets/svgs'
import GenreList from './GenreList'
import ResultList from './ResultList'
import styles from './moodPlay.module.scss'

const MoodPlay = () => {
  const genre = useRecoilValue(genreItem)
  const getMainMood = useRecoilValue(mainMoodItem)
  const getSubMood = useRecoilValue(subMoodItem)
  const resetGenre = useResetRecoilState(genreItem)

  useUnmount(() => resetGenre())

  return (
    <section className={styles.moodPlayContainer}>
      {getMainMood && getSubMood ? (
        <>
          <h2>
            선택하신 기분, 분위기에 어울리는 장르들이에요! <EmotionIcon />
          </h2>
          <GenreList />
          <div className={styles.result}>
            {genre ? <h3>{genre}</h3> : <h3>장르를 선택해 주세요!</h3>}
            <ResultList />
          </div>
        </>
      ) : (
        <h2>
          먼저 무드 선택을 해주세요! <EmotionIcon />
        </h2>
      )}
    </section>
  )
}
export default MoodPlay

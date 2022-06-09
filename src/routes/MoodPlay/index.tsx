import { useRecoilValue, useResetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'

import { useUnmount } from 'hooks'
import { mainMoodItemState, subMoodItemState, genreItemState } from 'states'

import { EmotionIcon } from 'assets/svgs'
import GenreList from './GenreList'
import ResultList from './ResultList'
import styles from './moodPlay.module.scss'

const MoodPlay = () => {
  const getMainMood = useRecoilValue(mainMoodItemState)
  const getSubMood = useRecoilValue(subMoodItemState)
  const genre = useRecoilValue(genreItemState)
  const resetGenre = useResetRecoilState(genreItemState)
  const navigate = useNavigate()

  const handleNavigate = () => navigate('/')

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
        <div className={styles.moodCheck}>
          <h2>
            먼저 무드 선택을 해주세요! <EmotionIcon />
          </h2>
          <button type='button' onClick={handleNavigate}>
            선택하러 가기
          </button>
        </div>
      )}
    </section>
  )
}
export default MoodPlay

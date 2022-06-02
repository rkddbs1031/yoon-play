import { Emotion } from 'assets/svgs'
import styles from './moodPlay.module.scss'

const MoodPlay = () => {
  return (
    <section className={styles.moodPlayContainer}>
      <h2>
        선택하신 분위기, 기분에 어울리는 장르들이에요! <Emotion />
      </h2>
    </section>
  )
}
export default MoodPlay

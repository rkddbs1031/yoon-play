import { Love } from 'assets/svgs'
import styles from './mood.module.scss'

const Mood = () => {
  return (
    <section className={styles.moodContainer}>
      <h2>
        당신의 기분과 분위기를 선택해주세요
        <Love />
      </h2>
    </section>
  )
}
export default Mood

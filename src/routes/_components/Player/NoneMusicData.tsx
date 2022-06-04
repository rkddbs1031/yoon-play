import styles from './player.module.scss'
import { MusicPlay, ArrowLeft, ArrowRight, Music } from 'assets/svgs'

const MUSIC_ICON = [
  {
    id: 1,
    icon: <ArrowLeft />,
  },
  {
    id: 2,
    icon: <MusicPlay />,
  },
  {
    id: 3,
    icon: <ArrowRight />,
  },
]

const NoneMusicData = () => {
  return (
    <div className={styles.player}>
      <h2>
        <div className={styles.icon}>
          <Music />
        </div>
        Yoon Play
      </h2>
      <dl className={styles.musicPlayInfo}>
        <dt>재생 음악 정보</dt>
        <dd className={styles.title}>재생목록이 없습니다.</dd>
      </dl>
      <div className={styles.btns}>
        {MUSIC_ICON.map((btn) => (
          <button key={btn.id} type='button'>
            {btn.icon}
          </button>
        ))}
      </div>
    </div>
  )
}
export default NoneMusicData

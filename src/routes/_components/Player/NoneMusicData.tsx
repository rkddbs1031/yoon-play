import styles from './player.module.scss'
import { PlayIcon, PrevPlayIcon, NextPlayIcon, LogoIcon } from 'assets/svgs'

const MUSIC_ICON = [
  {
    id: 1,
    icon: <PrevPlayIcon />,
  },
  {
    id: 2,
    icon: <PlayIcon />,
  },
  {
    id: 3,
    icon: <NextPlayIcon />,
  },
]

const NoneMusicData = () => {
  return (
    <div className={styles.player}>
      <h2 className={styles.logo}>
        <div className={styles.icon}>
          <LogoIcon />
        </div>
        Yoon Play
      </h2>
      <dl className={styles.musicInfo}>
        <dt>재생 음악 정보</dt>
        <dd className={styles.playTitle}>재생목록이 없습니다.</dd>
      </dl>
      <div className={styles.btns}>
        <div className={styles.commonBtn}>
          {MUSIC_ICON.map((btn) => (
            <button key={btn.id} type='button'>
              {btn.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
export default NoneMusicData

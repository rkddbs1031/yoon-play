import { useRecoilState, useRecoilValue } from 'recoil'
import { musicPlayItem, muscicPaused } from 'states'

import styles from './player.module.scss'
import { MusicPlay, MusicPaused, ArrowLeft, ArrowRight } from 'assets/svgs'
import PlayerConrol from './PlayerControl'
import { useEffect } from 'react'

const Player = () => {
  const musicItem = useRecoilValue(musicPlayItem)
  const [isPaused, setIsPaused] = useRecoilState(muscicPaused)

  const handleMusicPlay = () => setIsPaused(!isPaused)

  useEffect(() => {
    setIsPaused(false)
  }, [musicItem, setIsPaused])

  return (
    <section className={styles.playerContaienr}>
      {musicItem ? (
        <div className={styles.player}>
          <PlayerConrol />
          <div className={styles.cdWrap}>
            <div className={styles.img} style={{ backgroundImage: `url(${musicItem.imgUrl})` }} />
          </div>
          <dl className={styles.musicInfo}>
            <dt>노래 제목</dt>
            <dd className={styles.title}>{musicItem.title}</dd>
            <dt>가수</dt>
            <dd className={styles.channelTitle}>{musicItem.channelTitle}</dd>
          </dl>
          <div className={styles.btns}>
            <button type='button'>
              <ArrowLeft />
            </button>
            <button type='button' onClick={handleMusicPlay}>
              {isPaused ? <MusicPlay /> : <MusicPaused />}
            </button>
            <button type='button'>
              <ArrowRight />
            </button>
          </div>
        </div>
      ) : (
        <div>없음</div>
      )}
    </section>
  )
}

export default Player

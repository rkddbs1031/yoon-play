import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

import { useEffect } from 'hooks'
import { muscicPaused, musicPlayItem, bookmarkModalOpen } from 'states'

import PlayerControl from './PlayerControl'
import styles from './player.module.scss'
import { MusicPlay, MusicPaused, ArrowLeft, ArrowRight, BookMark } from 'assets/svgs'

const HaveMusicData = () => {
  const musicItem = useRecoilValue(musicPlayItem)
  const [isPaused, setIsPaused] = useRecoilState(muscicPaused)
  const setModalOpen = useSetRecoilState(bookmarkModalOpen)

  const handleMusicPlay = () => setIsPaused(!isPaused)

  const handleModalOpen = () => setModalOpen(true)

  useEffect(() => {
    setIsPaused(false)
  }, [musicItem, setIsPaused])

  return (
    <div className={styles.player}>
      <PlayerControl />
      <div className={styles.cdWrap}>
        <div className={styles.img} style={{ backgroundImage: `url(${musicItem.snippet.thumbnails.high.url})` }} />
      </div>
      <dl className={styles.musicInfo}>
        <dt>노래 제목</dt>
        <dd className={styles.title}>{musicItem.snippet.title}</dd>
        <dt>가수</dt>
        <dd className={styles.channelTitle}>{musicItem.snippet.channelTitle}</dd>
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
        <button type='button' onClick={handleModalOpen} className={styles.addPlayList}>
          <BookMark />
        </button>
      </div>
    </div>
  )
}
export default HaveMusicData

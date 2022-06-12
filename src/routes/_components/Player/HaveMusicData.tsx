import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { ChangeEvent } from 'react'
import { useEffect } from 'hooks'
import { musicPlayItemState, muscicPausedState, bookmarkModalOpenState, volumeState } from 'states'

import PlayerControl from './PlayerControl'
import styles from './player.module.scss'
import { PlayIcon, PauseIcon, PrevPlayIcon, NextPlayIcon, BookMarkIcon } from 'assets/svgs'

const HaveMusicData = () => {
  const musicItem = useRecoilValue(musicPlayItemState)
  const [isPaused, setIsPaused] = useRecoilState(muscicPausedState)
  const setModalOpen = useSetRecoilState(bookmarkModalOpenState)
  const [volume, setVolume] = useRecoilState(volumeState)

  const handleMusicPlay = () => setIsPaused(!isPaused)

  const handleModalOpen = () => setModalOpen(true)

  const handleChageRage = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.currentTarget.value))
  }

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
      <div className={styles.range}>
        <input
          type='range'
          value={volume}
          onChange={handleChageRage}
          className={styles.volume}
          min='0'
          max='100'
          id='volume'
        />
        <label htmlFor='volume'>볼륨</label>
      </div>
      <div className={styles.btns}>
        <div className={styles.commonBtn}>
          <button type='button'>
            <PrevPlayIcon />
          </button>
          <button type='button' onClick={handleMusicPlay}>
            {isPaused ? <PlayIcon /> : <PauseIcon />}
          </button>
          <button type='button'>
            <NextPlayIcon />
          </button>
        </div>
        <button type='button' onClick={handleModalOpen} className={styles.addPlayList}>
          <BookMarkIcon />
        </button>
      </div>
    </div>
  )
}
export default HaveMusicData

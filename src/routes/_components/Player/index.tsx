import { useRecoilState, useRecoilValue } from 'recoil'
import { useState, useEffect } from 'hooks'
import { musicPlayItem, muscicPaused, MyPlayList } from 'states'

import PlayerConrol from './PlayerControl'
import Modal from 'routes/_components/Modal/ModalFrame'
import styles from './player.module.scss'
import { MusicPlay, MusicPaused, ArrowLeft, ArrowRight, Music, BookMark } from 'assets/svgs'

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

const Player = () => {
  const musicItem = useRecoilValue(musicPlayItem)
  const [isPaused, setIsPaused] = useRecoilState(muscicPaused)
  const [myPlayList, setMyPlayList] = useRecoilState(MyPlayList)
  const [isVerified, setIsVerified] = useState<boolean>(false)

  const handleMusicPlay = () => setIsPaused(!isPaused)

  const handleModalOpen = () => setIsVerified(true)
  const handleModalClose = () => setIsVerified(false)

  const handleAddPlayList = () => {
    setMyPlayList([...myPlayList, Object(musicItem)])
    setIsVerified(false)
  }

  useEffect(() => {
    setIsPaused(false)
  }, [musicItem, setIsPaused])

  return (
    <>
      <section className={styles.playerContaienr}>
        {musicItem.videoId ? (
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
            <div className={styles.addPlayList}>
              <button type='button' onClick={handleModalOpen}>
                <BookMark />
              </button>
            </div>
          </div>
        ) : (
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
        )}
      </section>
      <Modal isOpen={isVerified} onClose={handleModalClose} width='400px' height='300px' text='플레이리스트 추가'>
        <p className={styles.modalText}>플레이리스트에 추가하시겠습니까?</p>
        <button type='button' className={styles.addBtn} onClick={handleAddPlayList}>
          추가하기
        </button>
      </Modal>
    </>
  )
}

export default Player

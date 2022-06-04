import { useRecoilState, useRecoilValue } from 'recoil'

import { useState, useEffect } from 'hooks'
import { musicPlayItem, muscicPaused, MyPlayList } from 'states'

import PlayerControl from './PlayerControl'
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

  const handleRemovePlayList = () => {
    setMyPlayList(myPlayList.filter((item) => item.id.videoId !== Object(musicItem).id.videoId))
    setIsVerified(false)
  }
  useEffect(() => {
    setIsPaused(false)
  }, [musicItem, setIsPaused])

  return (
    <>
      <section className={styles.playerContaienr}>
        {musicItem.id.videoId ? (
          <div className={styles.player}>
            <PlayerControl />
            <div className={styles.cdWrap}>
              <div
                className={styles.img}
                style={{ backgroundImage: `url(${musicItem.snippet.thumbnails.high.url})` }}
              />
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
      <Modal isOpen={isVerified} onClose={handleModalClose} width='400px' height='300px' text='플레이리스트 설정'>
        {myPlayList.filter((el) => el.id.videoId.includes(musicItem.id.videoId)).length > 0 ? (
          <>
            <p className={styles.modalText}>플레이리스트에서 삭제 하시겠습니까?</p>
            <button type='button' className={styles.addBtn} onClick={handleRemovePlayList}>
              삭제하기
            </button>
          </>
        ) : (
          <>
            <p className={styles.modalText}>플레이리스트에 추가하시겠습니까?</p>
            <button type='button' className={styles.addBtn} onClick={handleAddPlayList}>
              추가하기
            </button>
          </>
        )}
      </Modal>
    </>
  )
}

export default Player

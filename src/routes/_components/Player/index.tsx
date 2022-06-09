import { useRecoilState, useRecoilValue } from 'recoil'

import { bookmarkModalOpen, musicPlayItem, MyPlayList } from 'states'

import HaveMusicData from './HaveMusicData'
import NoneMusicData from './NoneMusicData'
import Modal from 'routes/_components/Modal/ModalFrame'
import styles from './player.module.scss'
import PlayListControl from '../PlayListControl'

const Player = () => {
  const musicItem = useRecoilValue(musicPlayItem)
  const [myPlayList, setMyPlayList] = useRecoilState(MyPlayList)
  const [modalOpen, setModalOpen] = useRecoilState(bookmarkModalOpen)

  const handleModalClose = () => setModalOpen(false)

  const handlePlayList = (val: string) => {
    val === 'add'
      ? setMyPlayList([...myPlayList, Object(musicItem)])
      : setMyPlayList(myPlayList.filter((item) => item.id.videoId !== Object(musicItem).id.videoId))
    setModalOpen(false)
  }

  return (
    <>
      <section className={styles.playerContaienr}>
        {musicItem.id.videoId ? <HaveMusicData /> : <NoneMusicData />}
      </section>
      <Modal
        isOpen={modalOpen}
        onClose={handleModalClose}
        width='400px'
        height='300px'
        text='플레이리스트 설정'
        btnText='닫기'
      >
        {myPlayList.filter((el) => el.id.videoId.includes(musicItem.id.videoId)).length > 0 ? (
          <PlayListControl modalText='플레이리스트에서 삭제 하시겠습니까?' btnText='삭제' onClick={handlePlayList} />
        ) : (
          <PlayListControl modalText='플레이리스트에 추가하시겠습니까?' btnText='추가' onClick={handlePlayList} />
        )}
      </Modal>
    </>
  )
}

export default Player

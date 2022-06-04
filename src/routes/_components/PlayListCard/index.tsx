import { useRecoilState, useSetRecoilState } from 'recoil'

import { useState } from 'hooks'
import { IItem } from 'types/playlist'
import { musicPlayItem, MyPlayList } from 'states'

import Modal from 'routes/_components/Modal/ModalFrame'
import styles from './card.module.scss'
import { MusicPlay, FillHeart, OutlineHeart } from 'assets/svgs'

interface IProps {
  item: IItem
}

const Card = ({ item }: IProps) => {
  const setMmusicItem = useSetRecoilState(musicPlayItem)
  const [myPlayList, setMyPlayList] = useRecoilState(MyPlayList)
  const [isOpen, setIsOpened] = useState<boolean>(false)

  const handleRemovePlayList = () => {
    setMyPlayList(myPlayList.filter((list) => list.id.videoId !== Object(item).id.videoId))
    setIsOpened(false)
  }
  const handleModalClose = () => setIsOpened(false)

  const handleMusicPlay = () => setMmusicItem(item)

  return (
    <>
      <li className={styles.playlist}>
        <button type='button' className={styles.playlistBtn} onClick={handleMusicPlay}>
          <dl>
            <div className={styles.imgInfo}>
              <dt>이미지</dt>
              <dd className={styles.imgWrap}>
                <div className={styles.img} style={{ backgroundImage: `url(${item.snippet.thumbnails.high.url})` }} />
              </dd>
            </div>
            <div className={styles.musicTitle}>
              <dt>노래제목</dt>
              <dd>{item.snippet.title}</dd>
            </div>
            <div className={styles.musicInfo}>
              <dt>작성자</dt>
              <dd>{item.snippet.channelTitle}</dd>
            </div>
            <div className={styles.icon}>
              <MusicPlay className={styles.play} />
              {myPlayList.filter((el) => el.id.videoId.includes(item.id.videoId)).length > 0 ? (
                <FillHeart className={styles.heart} />
              ) : (
                <OutlineHeart className={styles.heart} />
              )}
            </div>
          </dl>
        </button>
      </li>
      <Modal isOpen={isOpen} onClose={handleModalClose} width='400px' height='300px' text='플레이리스트 설정'>
        <p className={styles.modalText}>플레이리스트에서 삭제 하시겠습니까?</p>
        <button type='button' className={styles.addBtn} onClick={handleRemovePlayList}>
          삭제하기
        </button>
      </Modal>
    </>
  )
}

export default Card

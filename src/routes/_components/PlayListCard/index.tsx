import { useRecoilValue, useSetRecoilState } from 'recoil'

import { IItem } from 'types/playlist'
import { musicPlayItemState, myPlayListState } from 'states'

import { PlayIcon, FillHeartIcon, OutlineHeartIcon } from 'assets/svgs'
import styles from './card.module.scss'

interface IProps {
  item: IItem
}

const Card = ({ item }: IProps) => {
  const setMmusicItem = useSetRecoilState(musicPlayItemState)
  const myPlayList = useRecoilValue(myPlayListState)

  const handleMusicPlay = () => setMmusicItem(item)

  return (
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
            <PlayIcon className={styles.play} />
            {myPlayList.filter((el) => el.id.videoId.includes(item.id.videoId)).length > 0 ? (
              <FillHeartIcon className={styles.heart} />
            ) : (
              <OutlineHeartIcon className={styles.heart} />
            )}
          </div>
        </dl>
      </button>
    </li>
  )
}

export default Card

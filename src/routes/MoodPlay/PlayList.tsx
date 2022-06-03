import { IItem } from 'types/playlist'

import { MusicPlay, FillHeart, OutlineHeart } from 'assets/svgs'
import styles from './moodPlay.module.scss'

interface IProps {
  item: IItem
}

const PlayList = ({ item }: IProps) => {
  return (
    <li>
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
          <OutlineHeart className={styles.heart} />
        </div>
      </dl>
    </li>
  )
}

export default PlayList

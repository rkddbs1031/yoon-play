import { useSetRecoilState } from 'recoil'
import { IItem } from 'types/playlist'
import { musicPlayItem } from 'states'

import { MusicPlay, FillHeart, OutlineHeart } from 'assets/svgs'
import styles from './moodPlay.module.scss'

interface IProps {
  item: IItem
}

const PlayList = ({ item }: IProps) => {
  const setMmusicPlayItem = useSetRecoilState(musicPlayItem)

  const handleMusicPlay = () => {
    const { videoId } = item.id
    const { channelTitle, title } = item.snippet
    const imgUrl = item.snippet.thumbnails.high.url
    setMmusicPlayItem({
      videoId,
      channelTitle,
      title,
      imgUrl,
    })
  }

  return (
    <li>
      <button type='button' onClick={handleMusicPlay}>
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
      </button>
    </li>
  )
}

export default PlayList

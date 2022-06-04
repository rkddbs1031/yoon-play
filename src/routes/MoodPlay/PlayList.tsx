import { useRecoilValue, useSetRecoilState } from 'recoil'
import { IItem } from 'types/playlist'
import { musicPlayItem, MyPlayList } from 'states'

import styles from './moodPlay.module.scss'
import { MusicPlay, FillHeart, OutlineHeart } from 'assets/svgs'

interface IProps {
  item: IItem
}

const PlayList = ({ item }: IProps) => {
  const setMmusicItem = useSetRecoilState(musicPlayItem)
  const myPlayList = useRecoilValue(MyPlayList)

  const handleMusicPlay = () => {
    const { videoId } = item.id
    const { channelTitle, title } = item.snippet
    const imgUrl = item.snippet.thumbnails.high.url
    setMmusicItem({
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
            {myPlayList.filter((el) => el.videoId.includes(item.id.videoId)).length > 0 ? (
              <FillHeart className={styles.heart} />
            ) : (
              <OutlineHeart className={styles.heart} />
            )}
          </div>
        </dl>
      </button>
    </li>
  )
}

export default PlayList

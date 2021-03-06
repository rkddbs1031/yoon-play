import { useRecoilValue } from 'recoil'

import { myPlayListState } from 'states'

import { EmotionIcon } from 'assets/svgs'
import PlayListCard from 'routes/_components/PlayListCard'
import styles from './myplay.module.scss'

const MyPlay = () => {
  const myPlayList = useRecoilValue(myPlayListState)

  return (
    <section className={styles.myplayContainer}>
      <h2>
        나의 플레이리스트
        <EmotionIcon />
      </h2>
      {myPlayList.length > 0 ? (
        <ul className={styles.playlists}>
          {myPlayList.map((item) => (
            <PlayListCard key={item.id.videoId} item={item} />
          ))}
        </ul>
      ) : (
        <p>플레이리스트가 없습니다.</p>
      )}
    </section>
  )
}
export default MyPlay

import { useRecoilValue } from 'recoil'

import { MyPlayList } from 'states'

import PlayListCard from 'routes/_components/PlayListCard'
import styles from './myplay.module.scss'

const MyPlay = () => {
  const myPlayList = useRecoilValue(MyPlayList)

  return (
    <section className={styles.myplayContainer}>
      <h2>나의 플레이리스트</h2>
      {myPlayList ? (
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

import { useRecoilValue } from 'recoil'
import PlayerFrame from '@u-wave/react-youtube'

import { musicPlayItem, muscicPaused } from 'states'
import styles from './player.module.scss'

const PlayerConrol = () => {
  const musicItem = useRecoilValue(musicPlayItem)
  const isPaused = useRecoilValue(muscicPaused)

  return <PlayerFrame video={musicItem.id.videoId} paused={isPaused} autoplay className={styles.playerFrame} />
}
export default PlayerConrol

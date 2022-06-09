import { useRecoilValue } from 'recoil'
import PlayerFrame from '@u-wave/react-youtube'

import { musicPlayItemState, muscicPausedState } from 'states'

import styles from './player.module.scss'

const PlayerConrol = () => {
  const musicItem = useRecoilValue(musicPlayItemState)
  const isPaused = useRecoilValue(muscicPausedState)

  return <PlayerFrame video={musicItem.id.videoId} paused={isPaused} autoplay className={styles.playerFrame} />
}
export default PlayerConrol

import { useRecoilValue } from 'recoil'
import PlayerFrame from '@u-wave/react-youtube'

import { musicPlayItemState, muscicPausedState, volumeState } from 'states'

import styles from './player.module.scss'

const PlayerConrol = () => {
  const musicItem = useRecoilValue(musicPlayItemState)
  const isPaused = useRecoilValue(muscicPausedState)
  const volume = useRecoilValue(volumeState)

  return (
    <PlayerFrame
      video={musicItem.id.videoId}
      volume={volume / 100}
      paused={isPaused}
      autoplay
      className={styles.playerFrame}
    />
  )
}
export default PlayerConrol

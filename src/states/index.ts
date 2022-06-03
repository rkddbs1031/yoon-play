import { atom } from 'recoil'
import { IMusicPlayItem } from 'types/playlist'

export const mainMoodItem = atom<string>({
  key: '#mainMoodItem',
  default: '',
})

export const subMoodItem = atom<string>({
  key: '#subMoodItem',
  default: '',
})

export const musicPlayItem = atom<IMusicPlayItem>({
  key: '#musicPlayItem',
  default: {
    videoId: '',
    channelTitle: '',
    title: '',
    imgUrl: '',
  },
})

export const muscicPaused = atom<boolean>({
  key: '#muscicPaused',
  default: false,
})

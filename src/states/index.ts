import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { IMusicPlayItem } from 'types/playlist'

const { persistAtom } = recoilPersist()

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

export const MyPlayList = atom<IMusicPlayItem[]>({
  key: '#myPlayList',
  default: [],
  effects_UNSTABLE: [persistAtom], // 새로고침해도 유지
})

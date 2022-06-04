import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { IItem } from 'types/playlist'

const { persistAtom } = recoilPersist()

export const mainMoodItem = atom<string>({
  key: '#mainMoodItem',
  default: '',
})

export const subMoodItem = atom<string>({
  key: '#subMoodItem',
  default: '',
})

export const genreItem = atom<string>({
  key: '#genreItem',
  default: '',
})

export const musicPlayItem = atom<IItem>({
  key: '#musicPlayItem',
  default: {
    kind: '',
    etag: '',
    id: {
      kind: '',
      videoId: '',
    },
    snippet: {
      publishedAt: '',
      channelId: '',
      title: '',
      description: '',
      thumbnails: {
        default: {
          url: '',
          width: '',
          height: '',
        },
        medium: {
          url: '',
          width: '',
          height: '',
        },
        high: {
          url: '',
          width: '',
          height: '',
        },
      },
      channelTitle: '',
      liveBroadcastContent: '',
      publishTime: '',
    },
  },
})

export const muscicPaused = atom<boolean>({
  key: '#muscicPaused',
  default: false,
})

export const MyPlayList = atom<IItem[]>({
  key: '#myPlayList',
  default: [],
  effects_UNSTABLE: [persistAtom], // 새로고침해도 유지
})

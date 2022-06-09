import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { IItem } from 'types/playlist'

const { persistAtom } = recoilPersist()

export const mainMoodItemState = atom<string>({
  key: '#mainMoodItemState',
  default: '',
})

export const subMoodItemState = atom<string>({
  key: '#subMoodItemState',
  default: '',
})

export const genreItemState = atom<string>({
  key: '#genreItemState',
  default: '',
})

export const musicPlayItemState = atom<IItem>({
  key: '#musicPlayItemState',
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

export const muscicPausedState = atom<boolean>({
  key: '#muscicPausedState',
  default: false,
})

export const myPlayListState = atom<IItem[]>({
  key: '#myPlayListState',
  default: [],
  effects_UNSTABLE: [persistAtom],
})

export const bookmarkModalOpenState = atom<boolean>({
  key: '#bookmarkModalOpenState',
  default: false,
})

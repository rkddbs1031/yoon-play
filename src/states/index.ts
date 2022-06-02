import { atom } from 'recoil'

export const mainMoodItem = atom<string>({
  key: '#mainMoodItem',
  default: '',
})

export const subMoodItem = atom<string>({
  key: '#subMoodItem',
  default: '',
})

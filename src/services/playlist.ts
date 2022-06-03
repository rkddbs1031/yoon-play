import axios from 'axios'
import { IPlaylistResponse } from 'types/playlist'

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12`

interface IParamsType {
  genre: string
  mainMood: string
  subMood: string
}

export const getPlaylistApi = (params: IParamsType) => {
  const { genre, mainMood, subMood } = params
  const searchText = [genre, mainMood, subMood, '플레이리스트'].join(' ')

  return axios.get<IPlaylistResponse>(BASE_URL, {
    params: {
      q: searchText,
      key: process.env.REACT_APP_API_KEY,
    },
  })
}

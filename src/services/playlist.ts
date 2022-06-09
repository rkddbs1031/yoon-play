import axios from 'axios'
import { IPlaylistResponse } from 'types/playlist'

const BASE_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12`

interface IParamsType {
  genre?: string
  mainMood?: string
  subMood?: string
  keyword?: string
}

export const getPlaylistApi = (params: IParamsType) => {
  const { genre, mainMood, subMood, keyword } = params
  const searchText = [genre, mainMood, subMood, keyword, '플레이리스트'].join(' ').trim()

  return axios.get<IPlaylistResponse>(BASE_URL, {
    params: {
      q: searchText,
      key: process.env.REACT_APP_API_KEY,
    },
  })
}

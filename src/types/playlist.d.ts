export interface IMusicPlayItem {
  videoId: string
  channelTitle: string
  title: string
  imgUrl: string
}

export interface IImageSize {
  url: string
  width: number | string
  height: number | string
}

export interface IThumbnails {
  default: IImageSize
  medium: IImageSize
  high: IImageSize
}

export interface ISnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface IItem {
  kind: string
  etag: string
  id: {
    kind: string
    videoId: string
  }
  snippet: ISnippet
}

export interface IPlaylistResponse {
  kind: string
  etag: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: IItem[]
}

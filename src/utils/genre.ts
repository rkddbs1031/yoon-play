const CALM_LIST = [
  {
    id: 1,
    text: '어쿠스틱',
  },
  {
    id: 2,
    text: '지브리',
  },
  {
    id: 3,
    text: '재즈',
  },
  {
    id: 4,
    text: '뉴에이지',
  },
  {
    id: 5,
    text: '로파이',
  },
  {
    id: 6,
    text: '발라드',
  },
  {
    id: 7,
    text: '팝',
  },
]

const HAPPY_LIST = [
  {
    id: 1,
    text: '댄스',
  },
  {
    id: 2,
    text: 'R&B',
  },
  {
    id: 3,
    text: '팝',
  },
  {
    id: 4,
    text: '어쿠스틱',
  },
  {
    id: 5,
    text: '힙합',
  },
]

const getGenreList = (value: string) => {
  return value === '차분한' ? CALM_LIST : HAPPY_LIST
}

export { getGenreList }

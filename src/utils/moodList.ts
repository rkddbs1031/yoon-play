const MOOD_LIST = [
  {
    id: 1,
    key: 'calm',
    text: '차분한',
    list: [
      {
        id: 1,
        text: '잠잘 때',
      },
      {
        id: 2,
        text: '집중할 때',
      },
      {
        id: 3,
        text: '힘이 필요할 때',
      },
      {
        id: 4,
        text: '편안한 분위기',
      },
    ],
  },
  {
    id: 2,
    key: 'happy',
    text: '신나는',
    list: [
      {
        id: 1,
        text: '기분 좋을 때',
      },
      {
        id: 2,
        text: '운동할 때',
      },
      {
        id: 3,
        text: '힘이 필요할 때',
      },
    ],
  },
]

const getMainMoodList = () => MOOD_LIST

const getSubMoodList = (value: string) => {
  const NEW_LIST = MOOD_LIST.filter((item) => {
    return item.key === value
  })

  return NEW_LIST[0].list
}

export { MOOD_LIST, getMainMoodList, getSubMoodList }

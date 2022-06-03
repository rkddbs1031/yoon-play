import { useRecoilValue } from 'recoil'
import { MouseEvent, useEffect } from 'react'
import { useState } from 'hooks'
import { mainMoodItem, subMoodItem } from 'states'
import { getGenreList } from 'utils/genre'

import { cx } from 'styles'
import styles from './moodPlay.module.scss'

interface IProps {
  onClickGenre: (value: string) => void
}

const GenreList = ({ onClickGenre }: IProps) => {
  const [genreActive, setGenreActive] = useState<string>('')
  const mainMood = useRecoilValue(mainMoodItem)
  const subMood = useRecoilValue(subMoodItem)

  const handelClickGenre = (e: MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset
    setGenreActive(String(key))
  }
  useEffect(() => {
    onClickGenre(genreActive)
  }, [genreActive, onClickGenre])

  return (
    getGenreList(mainMood) && (
      <ul className={styles.list}>
        {getGenreList(mainMood).map((item) => (
          <li key={item.id} className={cx({ [styles.isActive]: genreActive === item.text })}>
            <button type='button' data-key={item.text} onClick={handelClickGenre}>
              <p>{item.text}</p>
              <div className={styles.tag}>
                <span>#{mainMood}</span>
                <span>#{subMood}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
    )
  )
}
export default GenreList

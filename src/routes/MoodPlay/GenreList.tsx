import { MouseEvent } from 'react'
import { useRecoilValue, useRecoilState } from 'recoil'

import { mainMoodItem, subMoodItem, genreItem } from 'states'
import { getGenreList } from 'utils/genre'

import { cx } from 'styles'
import styles from './moodPlay.module.scss'

const GenreList = () => {
  const mainMood = useRecoilValue(mainMoodItem)
  const subMood = useRecoilValue(subMoodItem)
  const [genre, setGenre] = useRecoilState(genreItem)

  const handelClickGenre = (e: MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset
    setGenre(String(key))
  }

  return (
    getGenreList(mainMood) && (
      <ul className={styles.list}>
        {getGenreList(mainMood).map((item) => (
          <li key={item.id} className={cx({ [styles.isActive]: genre === item.text })}>
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

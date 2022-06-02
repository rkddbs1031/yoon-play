import { MouseEvent, useEffect } from 'react'

import { cx } from 'styles'
import { useState } from 'hooks'
import { getSubMood } from 'utils/moodList'

import styles from './mood.module.scss'

interface IProps {
  moodKey: string
}
interface IList {
  id: number
  text: string
}

const SubMood = ({ moodKey }: IProps) => {
  const [subMood, setSubMood] = useState<IList[]>()
  const [mood, setMood] = useState<string>()
  const handleSubMoodClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset
    setMood(String(key))
  }

  useEffect(() => {
    const test = getSubMood(moodKey)
    setSubMood(test)
  }, [moodKey])

  return (
    <ul className={styles.subMood}>
      {subMood?.map((li) => (
        <li key={li.id} className={cx({ [styles.isSubActive]: mood === li.text })}>
          <button type='button' data-key={li.text} onClick={handleSubMoodClick}>
            {li.text}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default SubMood

import { MouseEvent } from 'react'

import { cx } from 'styles'
import { useState, useEffect } from 'hooks'
import { MOOD_LIST } from 'utils/moodList'

import styles from './mood.module.scss'

interface IProps {
  onItemChange: (itemValue: string) => void
}

const MainMood = ({ onItemChange }: IProps) => {
  const [mainMmood, setMainMood] = useState<string>()
  const [subMoodKey, setSubMoodKey] = useState<string>()

  const handleMoodClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key, text } = e.currentTarget.dataset
    setSubMoodKey(String(key))
    setMainMood(String(text))
  }

  useEffect(() => {
    if (subMoodKey) onItemChange(subMoodKey)
  }, [onItemChange, subMoodKey])

  return (
    <ul className={styles.mainMood}>
      {MOOD_LIST.map((item) => (
        <li key={item.id} className={cx({ [styles.isActive]: mainMmood === item.text })}>
          <button type='button' data-key={item.key} data-text={item.text} onClick={handleMoodClick}>
            {item.text}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default MainMood

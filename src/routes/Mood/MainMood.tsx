import { MouseEvent } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { useState, useEffect } from 'hooks'
import { MOOD_LIST } from 'utils/moodList'
import { mainMoodItem, subMoodItem } from 'states'

import { cx } from 'styles'
import styles from './mood.module.scss'

interface IProps {
  onItemChange: (itemValue: string) => void
}

const MainMood = ({ onItemChange }: IProps) => {
  const [mainMmood, setMainMood] = useRecoilState(mainMoodItem)
  const subMood = useResetRecoilState(subMoodItem)
  const [subMoodKey, setSubMoodKey] = useState<string>()

  const handleMoodClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key, text } = e.currentTarget.dataset
    setSubMoodKey(String(key))
    setMainMood(String(text))
  }

  useEffect(() => {
    if (subMoodKey) onItemChange(subMoodKey)
  }, [onItemChange, subMoodKey])

  useEffect(() => {
    subMood()
  }, [mainMmood, subMood])

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

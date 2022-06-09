import { MouseEvent } from 'react'
import { useRecoilState, useResetRecoilState } from 'recoil'

import { MOOD_LIST } from 'utils/moodList'
import { useState, useEffect } from 'hooks'
import { mainMoodItemState, subMoodItemState } from 'states'

import { cx } from 'styles'
import styles from './mood.module.scss'

interface IProps {
  onItemChange: (itemValue: string) => void
}

const MainMood = ({ onItemChange }: IProps) => {
  const [mainMmood, setMainMood] = useRecoilState(mainMoodItemState)
  const [subMoodKey, setSubMoodKey] = useState<string>()
  const resetSubMood = useResetRecoilState(subMoodItemState)

  const handleMoodClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key, text } = e.currentTarget.dataset
    setSubMoodKey(String(key))
    setMainMood(String(text))
  }

  useEffect(() => {
    if (subMoodKey) onItemChange(subMoodKey)
  }, [onItemChange, subMoodKey])

  useEffect(() => {
    resetSubMood()
  }, [mainMmood, resetSubMood])

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

import { MouseEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { cx } from 'styles'
import { useState } from 'hooks'
import { getSubMoodList } from 'utils/moodList'
import { subMoodItem } from 'states'

import styles from './mood.module.scss'

interface IProps {
  moodKey: string
}
interface IList {
  id: number
  text: string
}

const SubMood = ({ moodKey }: IProps) => {
  const [subMoodList, setSubMoodList] = useState<IList[]>()
  const [submood, setSubMood] = useRecoilState(subMoodItem)

  const handleSubMoodClick = (e: MouseEvent<HTMLButtonElement>) => {
    const { key } = e.currentTarget.dataset
    setSubMood(String(key))
  }

  useEffect(() => {
    setSubMoodList(getSubMoodList(moodKey))
  }, [moodKey])

  return (
    <ul className={styles.subMood}>
      {subMoodList?.map((li) => (
        <li key={li.id} className={cx({ [styles.isSubActive]: submood === li.text })}>
          <button type='button' data-key={li.text} onClick={handleSubMoodClick}>
            {li.text}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default SubMood

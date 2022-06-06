import { MouseEvent, useEffect } from 'react'
import { useRecoilState } from 'recoil'

import { useState } from 'hooks'
import { getSubMoodList } from 'utils/moodList'
import { ISubMoodList } from 'types/playlist'
import { subMoodItem } from 'states'

import { cx } from 'styles'
import styles from './mood.module.scss'

interface IProps {
  moodKey: string
}

const SubMood = ({ moodKey }: IProps) => {
  const [subMoodList, setSubMoodList] = useState<ISubMoodList[]>()
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

import { FormEvent } from 'react'
import { useState } from 'hooks'

import MainMood from './MainMood'
import SubMood from './SubMood'

import { Love } from 'assets/svgs'
import styles from './mood.module.scss'

const Mood = () => {
  const [subMoodKey, setSubMoodKey] = useState<string>()

  const onItemChange = (value: string) => setSubMoodKey(value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
  }

  return (
    <section className={styles.moodContainer}>
      <h2>
        당신의 기분과 분위기를 선택해주세요
        <Love />
      </h2>
      <form onSubmit={handleSubmit} className={styles.cateContainer}>
        <MainMood onItemChange={onItemChange} />
        {subMoodKey && <SubMood moodKey={subMoodKey} />}
        <button type='submit' className={styles.moodSubmit}>
          무드 선택
        </button>
      </form>
    </section>
  )
}
export default Mood

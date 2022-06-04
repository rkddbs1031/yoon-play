import { FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { useState } from 'hooks'
import { mainMoodItem, subMoodItem } from 'states'

import MainMood from './MainMood'
import SubMood from './SubMood'
import Modal from 'routes/_components/Modal/ModalFrame'
import { Love } from 'assets/svgs'
import styles from './mood.module.scss'

const Mood = () => {
  const [subMoodKey, setSubMoodKey] = useState<string>('')
  const getMainMood = useRecoilValue(mainMoodItem)
  const getSubMood = useRecoilValue(subMoodItem)
  const [isOpen, setIsOpened] = useState<boolean>(false)

  const onItemChange = (value: string) => setSubMoodKey(value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (!(getMainMood && getSubMood)) {
      setIsOpened(true)
    } else {
      setIsOpened(false)
    }
  }

  const handleModalClose = () => setIsOpened(false)

  return (
    <section className={styles.moodContainer}>
      <h2>
        당신의 기분과 분위기를 선택해주세요
        <Love />
      </h2>
      <form onSubmit={handleSubmit} className={styles.cateContainer}>
        <MainMood onItemChange={onItemChange} />
        {subMoodKey && <SubMood moodKey={subMoodKey} />}
        {getMainMood && getSubMood ? (
          <NavLink to='moodplay' className={styles.moodSubmit}>
            MOOD PLAY
          </NavLink>
        ) : (
          <button type='submit' className={styles.moodSubmit}>
            MOOD PLAY
          </button>
        )}
      </form>
      <Modal isOpen={isOpen} onClose={handleModalClose} width='400px' height='250px' text='알림창'>
        <p className={styles.modalText}>두개의 카테고리 모두 선택해주세요!</p>
      </Modal>
    </section>
  )
}
export default Mood

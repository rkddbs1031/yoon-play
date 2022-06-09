import { FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue, useResetRecoilState } from 'recoil'

import { useState, useMount } from 'hooks'
import { mainMoodItem, subMoodItem } from 'states'

import { LoveIcon } from 'assets/svgs'
import MainMood from './MainMood'
import SubMood from './SubMood'
import Modal from 'routes/_components/Modal/ModalFrame'
import styles from './mood.module.scss'

const Mood = () => {
  const [subMoodKey, setSubMoodKey] = useState<string>('')
  const getMainMood = useRecoilValue(mainMoodItem)
  const getSubMood = useRecoilValue(subMoodItem)
  const [isOpen, setIsOpened] = useState<boolean>(false)
  const resetMainMood = useResetRecoilState(mainMoodItem)

  const onItemChange = (value: string) => setSubMoodKey(value)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    if (!(getMainMood && getSubMood)) setIsOpened(true)
  }

  const handleModalClose = () => setIsOpened(false)

  useMount(() => resetMainMood())

  return (
    <section className={styles.moodContainer}>
      <h2>
        당신의 기분과 분위기를 선택해주세요
        <LoveIcon />
      </h2>
      <form onSubmit={handleSubmit} className={styles.cateContainer}>
        <MainMood onItemChange={onItemChange} />
        {subMoodKey && <SubMood moodKey={subMoodKey} />}
        <button type='submit' className={styles.moodSubmit}>
          {getMainMood && getSubMood ? <NavLink to='moodplay'>MOOD PLAY</NavLink> : <span>MOOD PLAY</span>}
        </button>
      </form>
      <Modal isOpen={isOpen} onClose={handleModalClose} width='350px' height='250px' text='알림창' btnText='확인'>
        <p className={styles.modalText}>두개의 카테고리 모두 선택해주세요!</p>
      </Modal>
    </section>
  )
}
export default Mood

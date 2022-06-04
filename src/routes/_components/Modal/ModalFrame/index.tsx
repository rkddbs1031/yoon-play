import { ReactNode } from 'react'

import Portal from '../index'
import styles from './modal.module.scss'

interface Props {
  isOpen: boolean
  onClose?: () => void
  children?: ReactNode
  width: string
  height: string
  text?: string
  btnText?: string
}

const ModalFrame = ({ isOpen, onClose, children, width, height, text, btnText }: Props) => {
  if (!isOpen) return null

  return (
    <Portal>
      <div className={styles.modal}>
        <div className={styles.modalBox} style={{ width: `${width}`, height: `${height}` }}>
          <p className={styles.modalTitle}>{text}</p>
          {children}
          <div className={styles.btnWrap}>
            {btnText && (
              <button type='button' className={styles.closeBtn} onClick={onClose}>
                {btnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default ModalFrame

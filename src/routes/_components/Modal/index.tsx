import { ReactNode } from 'react'
import reactDom from 'react-dom'

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props) => {
  const modalRoot = document.getElementById('modal')
  if (!modalRoot) return null
  return reactDom.createPortal(children, modalRoot)
}
export default Modal

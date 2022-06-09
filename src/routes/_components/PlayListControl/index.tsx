import styles from './playlistcontrol.module.scss'

interface IProps {
  modalText: string
  btnText: string
  onClick: (val: string) => void
}

const RemovePlayList = ({ modalText, btnText, onClick }: IProps) => {
  const handlePlayList = () => {
    btnText === '추가' ? onClick('add') : onClick('remove')
  }

  return (
    <>
      <p className={styles.modalText}>{modalText}</p>
      <button type='button' className={styles.addBtn} onClick={handlePlayList}>
        {btnText}하기
      </button>
    </>
  )
}
export default RemovePlayList

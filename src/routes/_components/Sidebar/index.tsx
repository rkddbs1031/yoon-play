import { useRef, useState } from 'react'

import { useClickAway } from 'react-use'

import { cx } from 'styles'
import { LogoIcon, HamburgerIcon, CloseIcon } from 'assets/svgs'
import LNB from './LNB'
import styles from './sidebar.module.scss'

const Sidebar = () => {
  const [sidebarDrawer, setSidebarDrawer] = useState(false)
  const asideRef = useRef(null)

  const handleSidebar = () => setSidebarDrawer((prev) => !prev)

  const handleCloseSidebar = () => sidebarDrawer && setSidebarDrawer(false)

  useClickAway(asideRef, handleCloseSidebar)

  return (
    <>
      <aside ref={asideRef} className={cx(styles.container, { [styles.show]: sidebarDrawer })}>
        <h2>
          <div className={styles.icon}>
            <LogoIcon />
          </div>
          Yoon Play
        </h2>
        <LNB />
        <button type='button' onClick={handleSidebar} className={styles.closeIcon}>
          <CloseIcon />
        </button>
      </aside>
      <button type='button' onClick={handleSidebar} className={styles.hamburger}>
        <HamburgerIcon />
      </button>
    </>
  )
}
export default Sidebar

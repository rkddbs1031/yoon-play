import { NavLink } from 'react-router-dom'

import { cx } from 'styles'
import { LogoIcon, EmotionIcon, MoodPlayIcon, MyPlayIcon, SearchIcon, HamburgerIcon, CloseIcon } from 'assets/svgs'
import styles from './sidebar.module.scss'
import { useState } from 'react'

const navData = [
  {
    id: 1,
    href: '/',
    text: '무드선택',
    icon: <EmotionIcon />,
  },
  {
    id: 2,
    href: 'moodplay',
    text: '무드 플레이',
    icon: <MoodPlayIcon />,
  },
  {
    id: 3,
    href: 'myplay',
    text: '마이플레이',
    icon: <MyPlayIcon />,
  },
  {
    id: 4,
    href: 'search',
    text: '검색',
    icon: <SearchIcon />,
  },
]

const Sidebar = () => {
  const [sidebarDrawer, setSidebarDrawer] = useState(false)

  const handleSidebar = () => setSidebarDrawer((prev) => !prev)

  return (
    <>
      <aside className={cx(styles.container, { [styles.show]: sidebarDrawer })}>
        <h2>
          <div className={styles.icon}>
            <LogoIcon />
          </div>
          Yoon Play
        </h2>
        <nav className={styles.nav}>
          <ul>
            {navData.map((item) => (
              <li key={item.id}>
                <NavLink to={item.href} className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
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

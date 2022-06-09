import { NavLink } from 'react-router-dom'

import { cx } from 'styles'
import { EmotionIcon, MoodPlayIcon, MyPlayIcon, SearchIcon } from 'assets/svgs'
import styles from './sidebar.module.scss'

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

const LNB = () => {
  return (
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
  )
}
export default LNB

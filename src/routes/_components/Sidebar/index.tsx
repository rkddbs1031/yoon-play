import { NavLink } from 'react-router-dom'

import { cx } from 'styles'
import { Emotion, Music, Play, Search } from 'assets/svgs'
import styles from './sidebar.module.scss'

const navData = [
  {
    id: 1,
    href: '/',
    text: '무드선택',
    icon: <Emotion />,
  },
  {
    id: 2,
    href: 'moodplay',
    text: '무드 플레이',
    icon: <Music />,
  },
  {
    id: 3,
    href: 'myplay',
    text: '마이플레이',
    icon: <Play />,
  },
  {
    id: 4,
    href: 'search',
    text: '검색',
    icon: <Search />,
  },
]

const Sidebar = () => {
  return (
    <aside className={styles.container}>
      <h2>
        <div className={styles.icon}>
          <Music />
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
    </aside>
  )
}
export default Sidebar

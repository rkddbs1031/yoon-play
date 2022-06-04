import { Routes, Route } from 'react-router-dom'

import Mood from './Mood'
import MoodPlay from './MoodPlay'
import MyPlay from './MyPlay'
import Search from './Search'
import Sidebar from './_components/Sidebar'
import Player from 'routes/_components/Player'
import styles from './routes.module.scss'

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<Mood />} />
          <Route path='moodplay' element={<MoodPlay />} />
          <Route path='myplay' element={<MyPlay />} />
          <Route path='search' element={<Search />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
        <Player />
      </main>
    </div>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Mood from './Mood'
import MyPlay from './MyPlay'
import Search from './Search'
import Sidebar from './_components/Sidebar'

const App = () => {
  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.main}>
        <Routes>
          <Route path='/' element={<Mood />} />
          <Route path='myplay' element={<MyPlay />} />
          <Route path='search' element={<Search />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default App

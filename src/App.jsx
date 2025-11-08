import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Detail from './pages/Detail'
import Vote from './pages/Vote'

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <NavLink to="/" className="brand">Social Anti-Fake News</NavLink>
        </nav>
      </header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<Detail />} />
          <Route path="/news/:id/vote" element={<Vote />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Social Anti-Fake News</p>
      </footer>
    </div>
  )
}



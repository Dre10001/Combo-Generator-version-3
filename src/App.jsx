import React from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ModePage from './pages/ModePage.jsx'
import DifficultyPage from './pages/DifficultyPage.jsx'
import LengthPage from './pages/LengthPage.jsx'
import PlayPage from './pages/PlayPage.jsx'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 bg-white border-b">
        <div className="mx-auto max-w-3xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="font-bold text-lg text-slate-800">
            Combo Generator
          </Link>
          <nav className="text-sm text-slate-600">
            <Link to="/" className="hover:underline">Reset</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <div className="mx-auto max-w-3xl p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mode" element={<ModePage />} />
            <Route path="/difficulty" element={<DifficultyPage />} />
            <Route path="/length" element={<LengthPage />} />
            <Route path="/play" element={<PlayPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      <footer className="bg-white border-t">
        <div className="mx-auto max-w-3xl px-4 py-3 text-xs text-slate-500">
          v3
        </div>
      </footer>
    </div>
  )
}

import React from 'react'
import { Link } from 'react-router-dom'
import { useSettings } from '../state/SettingsContext.jsx'

export default function Home() {
  const { settings } = useSettings()
  return (
    <div className="space-y-6">
      <div className="text-center mt-6">
        <h1 className="text-2xl font-bold text-slate-900">Combo Generator</h1>
        <p className="text-slate-600 mt-2 text-sm">
          Pick a mode, difficulty, and length. Generate clean combos fast.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card label="Mode" value={labelMode(settings.mode)} to="/mode" />
        <Card label="Difficulty" value={labelDifficulty(settings.difficulty)} to="/difficulty" />
        <Card label="Length" value={labelLength(settings)} to="/length" />
      </div>

      <div className="flex gap-3">
        <Link
          to="/play"
          className="flex-1 text-center px-4 py-3 rounded-xl bg-slate-900 text-white font-semibold"
        >
          Start
        </Link>
      </div>
    </div>
  )
}

function Card({ label, value, to }) {
  return (
    <Link to={to} className="rounded-2xl border bg-white p-4 block">
      <div className="text-xs font-semibold text-slate-500">{label}</div>
      <div className="text-lg font-bold text-slate-900 mt-1">{value}</div>
      <div className="text-xs text-slate-500 mt-2 underline">Change</div>
    </Link>
  )
}

function labelMode(m) {
  if (m === 'moves') return 'Moves'
  if (m === 'freezes') return 'Freezes'
  return 'Moves + Freezes'
}
function labelDifficulty(d) {
  return ({E:'Easy', M:'Medium', H:'Hard', I:'Insanity'}[d] || 'Medium')
}
function labelLength(s) {
  if (s.mode === 'moves') return `${s.counts.moves} items`
  if (s.mode === 'freezes') return `${s.counts.freezes} items`
  return `${s.counts.moves} moves • ${s.counts.freezes} freezes`
}

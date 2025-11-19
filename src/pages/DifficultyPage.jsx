import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettings } from '../state/SettingsContext.jsx'
import Section from '../components/Section.jsx'

const OPTIONS = [
  { k: 'E', name: 'Easy' },
  { k: 'M', name: 'Medium' },
  { k: 'H', name: 'Hard' },
  { k: 'I', name: 'Insanity' },
]

export default function DifficultyPage() {
  const nav = useNavigate()
  const { settings, setSettings } = useSettings()

  function set(difficulty) {
    setSettings({ ...settings, difficulty })
    nav('/length')
  }

  return (
    <Section title="Difficulty">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {OPTIONS.map(o => (
          <button
            key={o.k}
            onClick={() => set(o.k)}
            className="rounded-2xl border p-4 bg-white active:scale-[0.99]"
          >
            <div className="font-semibold">{o.name}</div>
            <div className="text-xs text-slate-500">{o.k}</div>
          </button>
        ))}
      </div>
    </Section>
  )
}

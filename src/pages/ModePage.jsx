import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettings } from '../state/SettingsContext.jsx'
import Section from '../components/Section.jsx'

export default function ModePage() {
  const nav = useNavigate()
  const { settings, setSettings } = useSettings()

  function set(mode) {
    setSettings({ ...settings, mode })
    nav('/difficulty')
  }

  return (
    <Section title="Choose mode">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Opt onClick={() => set('moves')} title="Moves" desc="Power and dynamics" />
        <Opt onClick={() => set('freezes')} title="Freezes" desc="Holds and shapes" />
        <Opt onClick={() => set('both')} title="Both" desc="Mix of moves + freezes" />
      </div>
    </Section>
  )
}

function Opt({ title, desc, ...props }) {
  return (
    <button
      className="rounded-2xl border p-4 text-left bg-white active:scale-[0.99]"
      {...props}
    >
      <div className="font-semibold">{title}</div>
      <div className="text-sm text-slate-600">{desc}</div>
    </button>
  )
}

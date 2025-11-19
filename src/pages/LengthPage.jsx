import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSettings } from '../state/SettingsContext.jsx'
import Section from '../components/Section.jsx'

export default function LengthPage() {
  const nav = useNavigate()
  const { settings, setSettings } = useSettings()

  function setCount(kind, delta) {
    const next = Math.max(1, Math.min(12, (settings.counts[kind] || 1) + delta))
    setSettings({ ...settings, counts: { ...settings.counts, [kind]: next } })
  }

  return (
    <Section title="Length">
      <div className="space-y-4">
        {(settings.mode === 'moves' || settings.mode === 'both') && (
          <Row label="Moves" value={settings.counts.moves}
               dec={() => setCount('moves', -1)} inc={() => setCount('moves', +1)} />
        )}
        {(settings.mode === 'freezes' || settings.mode === 'both') && (
          <Row label="Freezes" value={settings.counts.freezes}
               dec={() => setCount('freezes', -1)} inc={() => setCount('freezes', +1)} />
        )}
        <div className="pt-2">
          <button
            onClick={() => nav('/play')}
            className="w-full rounded-xl bg-slate-900 text-white font-semibold px-4 py-3"
          >
            Continue
          </button>
        </div>
      </div>
    </Section>
  )
}

function Row({ label, value, inc, dec }) {
  return (
    <div className="flex items-center justify-between rounded-2xl border bg-white p-4">
      <div className="font-semibold">{label}</div>
      <div className="flex items-center gap-3">
        <button onClick={dec} className="rounded-lg border bg-white px-3 py-2 active:scale-[0.99]">-</button>
        <div className="w-8 text-center font-mono">{value}</div>
        <button onClick={inc} className="rounded-lg border bg-white px-3 py-2 active:scale-[0.99]">+</button>
      </div>
    </div>
  )
}

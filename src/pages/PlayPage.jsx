import React, { useMemo, useState } from 'react'
import { useSettings } from '../state/SettingsContext.jsx'
import { generateCombo } from '../lib/generate.js'
import Chip from '../components/Chip.jsx'
import Section from '../components/Section.jsx'

export default function PlayPage() {
  const { settings } = useSettings()
  const [seed, setSeed] = useState(0)

  const combo = useMemo(
    () => generateCombo({ mode: settings.mode, difficulty: settings.difficulty, counts: settings.counts }),
    [settings, seed]
  )

  function reshuffle() {
    // simple re-render switch
    setSeed(s => s + 1)
    window.navigator?.vibrate?.(8)
  }

  function copyToClipboard() {
    const parts = []
    if (combo.moves?.length) parts.push(`Moves: ${combo.moves.join(', ')}`)
    if (combo.freezes?.length) parts.push(`Freezes: ${combo.freezes.join(', ')}`)
    const text = parts.join(' | ')
    navigator.clipboard?.writeText(text)
  }

  return (
    <div className="space-y-6">
      <header className="text-center">
        <div className="text-xs text-slate-500">
          {labelDifficulty(settings.difficulty)} • {labelMode(settings.mode)}
        </div>
        <h1 className="text-2xl font-bold text-slate-900 mt-1">Your combo</h1>
      </header>

      {(combo.moves?.length > 0) && (
        <Section title="Moves">
          <div className="flex flex-wrap gap-2">
            {combo.moves.map((m, i) => <Chip key={i}>{m}</Chip>)}
          </div>
        </Section>
      )}

      {(combo.freezes?.length > 0) && (
        <Section title="Freezes">
          <div className="flex flex-wrap gap-2">
            {combo.freezes.map((f, i) => <Chip key={i}>{f}</Chip>)}
          </div>
        </Section>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Action onClick={reshuffle} label="Shuffle" />
        
      </div>

      
    </div>
  )
}

function Action({ label, className='', ...props }) {
  return (
    <button
      className={`rounded-xl bg-slate-900 text-white font-semibold px-4 py-3 active:scale-[0.99] ${className}`}
      {...props}
    >
      {label}
    </button>
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

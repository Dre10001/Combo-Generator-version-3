import { moves, freezes } from '../data/moves.js'

function pickUnique(pool, n) {
  const arr = Array.from(pool)
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr.slice(0, Math.max(0, Math.min(n, arr.length)))
}

export function generateCombo({ mode, difficulty, counts }) {
  const d = difficulty || 'M'
  const out = { moves: [], freezes: [] }

  if (mode === 'moves' || mode === 'both') {
    out.moves = pickUnique(moves[d] || [], counts?.moves ?? 4)
  }
  if (mode === 'freezes' || mode === 'both') {
    out.freezes = pickUnique(freezes[d] || [], counts?.freezes ?? 3)
  }
  return out
}

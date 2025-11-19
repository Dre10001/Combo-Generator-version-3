import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const Ctx = createContext(null)

const DEFAULTS = {
  mode: 'moves',           // 'moves' | 'freezes' | 'both'
  difficulty: 'M',         // 'E' | 'M' | 'H' | 'I'
  counts: { moves: 4, freezes: 3 } // used per mode
}

const KEY = 'cg3.settings.v1'

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try { return { ...DEFAULTS, ...(JSON.parse(localStorage.getItem(KEY)) || {}) } }
    catch { return DEFAULTS }
  })

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(settings))
  }, [settings])

  const value = useMemo(() => ({ settings, setSettings }), [settings])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useSettings() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('SettingsContext missing')
  return ctx
}

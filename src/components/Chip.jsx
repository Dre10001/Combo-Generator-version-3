import React from 'react'

export default function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-sm">
      {children}
    </span>
  )
}

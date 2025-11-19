import React from 'react'
export default function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-sm font-semibold text-slate-600 mb-2">{title}</h2>
      <div className="rounded-2xl border bg-white p-4">{children}</div>
    </section>
  )
}

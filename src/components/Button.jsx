import React from 'react'

export default function Button({ as:As='button', className='', ...props }) {
  const cls =
    'px-4 py-2 rounded-xl text-sm font-semibold bg-slate-900 text-white active:scale-[0.99] ' +
    'disabled:opacity-50 disabled:cursor-not-allowed ' + className
  return <As className={cls} {...props} />
}

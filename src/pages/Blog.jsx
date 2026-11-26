import React, { useState } from 'react'

export default function Blog() {
  const categories = [
    ['Hackathon', 'code', 'Build. Break. Repeat.', 'bg-[#e6eeff]', 'text-[#2455b8]'],
    ['Competition', 'trophy', 'A little healthy ambition.', 'bg-[#ece6ff]', 'text-[#7554ad]'],
    ['Workshop', 'lightbulb', 'Learn by doing.', 'bg-[#fff0d6]', 'text-[#a5722b]'],
    ['Conference', 'microphone-stage', 'Big ideas, in good company.', 'bg-[#dff2eb]', 'text-[#2b7c66]'],
    ['Meetup', 'users-three', 'Find your kind of people.', 'bg-[#ffe8e5]', 'text-[#ad5c50]'],
  ]

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='w-full max-w-7xl mt-20 flex gap-10 items-start min-h-screen'>


        <div className='w-full'>
          <div>
            <h1 className='text-accent text-sm'>Pick your next pursuit</h1>
            <p className='text-3xl font-bold tracking-tight'>There’s more than one way to begin.</p>
          </div>

          <div className='flex items-center gap-3 border w-full h-60'>
            {categories.map(([type, icon, line, bg, color]) => (
              <div className={`borde flex flex-col rounded-3xl p-4 w-56 h-40 border-border-10 ${bg} cursor-pointer hover:-translate-y-2 transition-all ease-in-out flex justify-center`}>
                <h1 className={`text-xl font-bold tracking-tight ${color}`}>{type}</h1>
                <p className='text-xs text-muted-text'>{line}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
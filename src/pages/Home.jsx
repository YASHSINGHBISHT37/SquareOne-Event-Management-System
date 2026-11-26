import React from 'react'

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen">
      <div className='w-full max-w-7xl mt-20 flex flex-col gap-6 items-cente min-h-screen'>
        <div className='border h-100 flex items-center justify-center flex-col'>
          <h1 className='text-6xl font-bold tracking-tight text-center'>The complete Hackathon platform <br />to host your Next Hackathon</h1>

          <div className='flex item-center gap-3'>
            <div className='border rounded-2xl p-2 flex items-center px-4 tracking-tight bg-accent text-bg text-sm border-border-10'>
              <p>For Organizations</p>
            </div>

            <div className='border rounded-2xl p-2 flex items-center px-4 text-sm tracking-tight bg-muted-bg border-border-10'>
              <p>For Participants</p>
            </div>

          </div>
        </div>


      </div>
    </div>

  )
}

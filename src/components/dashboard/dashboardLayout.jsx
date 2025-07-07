import React from 'react'
import Sidebar from './sidebar'
import Maincontent from './maincontent'

function Dashboard() {
  return (
    <main className='flex w-full min-h-screen overflow-x-hidden border-3'>
      <Sidebar/>
      <Maincontent/>
    </main>
  )
}

export default Dashboard

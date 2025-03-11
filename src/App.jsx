import { useState } from 'react'
import React from 'react'
import './App.css'
import SideBar from './Components/SideBar'
import Dashboard from './Components/Dashboard'

function App() {
  

  return (
    <>
    <div className='w-full flex'>
      <SideBar/>
      <main className='grow'>
        <Dashboard/>
      </main>
    </div>
    </>
  )
}

export default App

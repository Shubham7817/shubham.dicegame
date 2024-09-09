import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Navbar from './components/Navbar'
import Infopage from './components/Infopage'
import { Route,Routes } from 'react-router-dom'
import Gamepage from './components/Gamepage'
import Showrules from './components/Showrules'

function App() {

  return (
    <div>
        
      <Routes>
        <Route path='/' element={<Infopage/>}/>
        <Route path='/gamepage' element={<Gamepage/>}/>
        <Route path='/gamepage/showrules' element={<Showrules/>}/>
      </Routes>

    </div>
  )
}

export default App

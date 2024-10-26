import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Auth from './components/auth/auth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="wrap">
    <Auth />
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Joke from './Components/Jokes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='app'>
      <Joke/>

      </div>
    </>
  )
}

export default App

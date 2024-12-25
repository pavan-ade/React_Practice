import { useState } from 'react'
import './App.css'
import Page from '/Users/ADE PAVAN/Documents/React/Lecture-4/src/Component/Page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Page />    
    </>
  )
}

export default App

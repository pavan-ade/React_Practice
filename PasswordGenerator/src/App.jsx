import { useState, useCallback , useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setLength] = useState(8)
  const [charAllowed, setCharAllowed] = useState(false)
  const [numAllowed, setNumAllowed] = useState(false)
  const passwordRef = useRef(null)

  const generatePassword = useCallback ( ()=> {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQSTUVWXYZabcdefghijklmnopqstuvwxyz"

    if(numAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for(let i=0; i<length; i++){
      pass += str.charAt(Math.floor(Math.random() * str.length))
    }

    setPassword(pass)
  }, [length,numAllowed,charAllowed])

  useEffect( ()=>{
    generatePassword();
  },[length,numAllowed,charAllowed])

  const copyPassToClipbord = () =>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select();
  }


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 bg-gray-800 text-orange-500'>
      <h1 className="text-3xl font-bold mb-2 text-center ">Password Genarator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
        onClick={ copyPassToClipbord}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>
      <div
        className='flex text-sm gap-x-2'
      >
        <div
          className='flex items-center gap-x-1'
        >
          <input type="range"
            min={8}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            id='length'
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div
          className='flex items-center gap-x-1'
        >
          <input type="checkbox"
            defaultChecked={numAllowed}
            onChange={() => {
              setNumAllowed((prev) => !prev)
            }}
            name="" id="numberAllowed" />
          <label htmlFor="numberAllowed">Numbers </label>
        </div>
        <div
          className='flex items-center gap-x-1'
        >
          <input type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            name="" id="charAllowed" />
          <label htmlFor="charAllowed">Characters </label>
        </div>
      </div>
    </div>
  )
}

export default App

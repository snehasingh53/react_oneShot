import { useState } from 'react'
import './App.css'

function App() {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(username)
    setUsername(' ')

  }
  
  const [username,setUsername] = useState(' ')

  return (
    <>
      <form onSubmit={(e)=>
      submitHandler(e)

      }>
      <input 
      value={username}  //"sneha" cannot be changed

      onChange={(e)=>{
         setUsername(e.target.value)
      }}
      className="px-4 py-3 text-xl rounded-xl m-5" 
      type="text" 
      placeholder="enter your name"/>
      <button 
      className='px-4 py-4 text-xl m-5 font-semibold bg-emerald-600 rounded-xl'> 
      Submit
      </button>
      </form>
    </>
  )
}

export default App

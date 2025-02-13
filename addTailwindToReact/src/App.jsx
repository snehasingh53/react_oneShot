
import './App.css'

function App() {

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("submitted")
  }

  return (
    <>
     <div>
      <form onSubmit={(e)=>{
        submitHandler(e)}
      }>   
        <input className="px-4 py-3 text-xl rounded-xl m-5" type="text" placeholder="enter your name"/>
        <button className='px-4 py-4 text-xl m-5 font-semibold bg-emerald-600 rounded-xl'> Submit</button>
      </form>
     </div>
    </>
  )
}

export default App

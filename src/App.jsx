import { useState ,useCallback} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8) 
  const[numberAllowed,setnumberAllowed] =useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  return (
    <>
      <h1 className="text-4xl text-enter text-white">Password generator</h1>
      
    </>
  )
}

export default App

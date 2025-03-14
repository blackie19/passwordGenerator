import { useState ,useCallback} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8) 
  const[numberAllowed,setnumberAllowed] =useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[Password,setPassword]=useState("")

  const passwordGenerator = useCallback(()=>{

    const pass=""
    const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str +="1234567890"
    if(charAllowed) str += "(  @#$%^&*(){}:;'?/[]) "

    for(let i = 1;i<=length;i++){
      let index = Math.floor(Math.random()*str.length()+1)
      pass += str.charAt(index)
    }

   setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])
  

  return (
    <>
      <h1 className="text-4xl text-enter text-white">Password generator</h1>
      
    </>
  )
}

export default App

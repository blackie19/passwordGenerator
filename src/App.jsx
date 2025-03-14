import { useState ,useCallback,useRef} from 'react'

import './App.css'

function App() {
  const [length,setLength] = useState(8) 
  const[numberAllowed,setnumberAllowed] =useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[Password,setPassword]=useState("")
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{

    let  pass=""
     let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str +="1234567890"
    if(charAllowed) str += "(  @#$%^&*(){}:;'?/[]) "

    for(let i = 1;i<=length;i++){
      let index = Math.floor(Math.random()*str.length())
      pass += str.charAt(index)
    }

   setPassword(pass)


  },[length,numberAllowed,charAllowed,setPassword])


  return (
    <>
     <div className='w-full max-w-lg mx-auto
       shadow-md rounded-lg px-7 my-8 text-orange-500 bg-gray-700'>

          <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4"'>
           
          <input 
           type="text"
           value = {Password}
           className="outline-none w-full py-1 px-3"
           placeholder="password"
           readOnly
           ref={passwordRef}
           />

             <button
             
             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
              >copy</button>
        </div>
         
         <div className='flex text-md gap-x-4'>
           <div className='flex items-center gap-x-3 py-5'>
             <input 

               type="range"
               min={6}
               max={100}
               value={length}
                className='cursor-pointer'
               onChange={(e)=>{setLength(e.target.value)}} 
             />
               <label>Length: {length}</label>
           </div>
           <div className="flex items-center gap-x-3">
             <input
               type="checkbox"
               defaultChecked={numberAllowed}
               id="numberInput"
               onChange={() => {
               setnumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="characterInput"
               onChange={() => {
                  setcharAllowed((prev) => !prev )
               }}
             />
              <label htmlFor="characterInput">Characters</label>
            </div>
         </div>
      
     </div>
      
    </>
  )
}

export default App

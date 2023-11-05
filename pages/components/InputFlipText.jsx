import React, { useState } from 'react'

const InputFlipText = () => {


    const [dataInputText, setdataInputText] = useState("")
    



  return (
    <>

    <input onChange={(e)=>setdataInputText(e.target.value)}></input>
    <br></br>
    <button onClick={()=>{}}>Voltea texto</button>
    {dataInputText}
    </>
    
  )
}

export default InputFlipText
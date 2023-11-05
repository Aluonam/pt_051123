import React, { useState } from 'react'

const InputFlipText = () => {


    const [dataInputText, setdataInputText] = useState("")

    const turnUpText = ()=>{
        const arrText = dataInputText.split("").reverse()
        console.log(arrText)
    }


  return (
    <>
    <input onChange={(e)=>setdataInputText(e.target.value)}></input>
    <br></br>
    <button onClick={()=>{turnUpText()}}>Voltea texto</button>

    </>
    
  )
}

export default InputFlipText
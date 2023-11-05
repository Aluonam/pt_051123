import React, { useState } from 'react'

const InputFlipText = () => {


    const [dataInputText, setdataInputText] = useState("")
    const [turnText, setRurnText] = useState()

    const turnUpText = ()=>{
        const arrText = dataInputText.split("").reverse().join("")
        setRurnText(arrText)
    }


  return (
    <>
    <input onChange={(e)=>setdataInputText(e.target.value)}></input>
    <br></br>
    <button onClick={()=>{turnUpText()}}>Voltea texto</button>
    {turnText}
    </>
    
  )
}

export default InputFlipText
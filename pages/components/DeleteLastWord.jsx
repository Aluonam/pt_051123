import React, {useState} from 'react'

const DeleteLastWord = () => {

    const [inputText, setinputText] = useState([])

    const deleteLastWord = ()=>{
       setinputText(inputText.slice(0, -1)) 
    }
  return (
    <>
    <div>DeleteLastWord</div>
    <input onChange={(e)=>{setinputText(e.target.value)}}></input>
    <br></br>
    <button onClick={()=>{deleteLastWord()}}>Borra la última palabra</button>
    {inputText}
    </>
  )
}

export default DeleteLastWord
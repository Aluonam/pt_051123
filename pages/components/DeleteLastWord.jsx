import React, {useState} from 'react'

const DeleteLastWord = () => {

    const [inputText, setinputText] = useState([])

    const deleteLastWord = ()=>{
        const newInputText = structuredClone(inputText).split(" ")
        newInputText.pop()
        setinputText(newInputText.join(" "))
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
import React from 'react'

const DeleteLastWord = () => {


  return (
    <>
    <div>DeleteLastWord</div>
    <input onChange={(e)=>{console.log(e.target.value)}}></input>
    <br></br>
    <button>Borra la última palabra</button>
    </>
  )
}

export default DeleteLastWord
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const TableDataAPI = () => {

    const [dataAPI, setDataAPI] = useState([])

    useEffect( () =>  {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`;

      axios.get(url)
      .then(response => setDataAPI(response.data.results))
      .catch(error => console.log("error detected", error))
    }, [])


    console.log(dataAPI)
    const dataNamePokemonURL = dataAPI.map((actualElem)=>{
        return(
            <>
            <tr>
                <td>{actualElem.name}</td>
                <td>{actualElem.url}</td>
            </tr>
            </>
        )
    })
    
  return (
    <>
    <div>TableDataAPI</div>
    <table>
        <thead>
            <tr>
                <td> Nombre pokemon </td>
                <td> URL para más </td>
            </tr>
        </thead>

        <tbody>
            {dataNamePokemonURL}
        </tbody>
    </table>
    </>
  )
}

export default TableDataAPI
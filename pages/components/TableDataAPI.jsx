import React, {useState, useEffect} from 'react'
import axios from 'axios';

const TableDataAPI = () => {

    const [dataAPI, setDataAPI] = useState({})

    useEffect( () =>  {
      const url = `https://pokeapi.co/api/v2/pokemon?offset=20&limit=20`;

      axios.get(url)
      .then(response => console.log(response.data.results))
      .catch(error => console.log("error detected", error))
    }, [])
    
  return (
    <>
    <div>TableDataAPI</div>
    <table>
        <thead>
            <tr>
                <td>1</td>
                <td>2</td>
            </tr>
        </thead>
        
        <tbody>
        <tr>
                <td>1</td>
                <td>2</td>
            </tr>
       
        </tbody>
    </table>
    </>
  )
}

export default TableDataAPI
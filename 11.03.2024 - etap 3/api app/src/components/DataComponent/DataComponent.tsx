import axios from 'axios';
import './DataComponent.style.scss';
import { useEffect, useState } from 'react';
import UniversalTable from '../UniversalTable/UniversalTable';

interface DataComponentProps{
    tableName: string
}

function DataComponent({tableName}: DataComponentProps) {
  const [dbResponse, setDbResponse] = useState<any>();

  useEffect(() => {
    getData();
  }, []);
 
  const getData = async() =>{
    try{
      axios.get('http://localhost:3000/'+tableName)
      .then(response => {
        setDbResponse(response)
      })
    } 
    catch(error){
      console.log('error: ', error)
    }
  }


  return (
    <div className='mainDataContainer'>
        <UniversalTable jsonData={dbResponse}/>
        <button onClick={getData}>Refresh data</button>
    </div>
    
  )
}

export default DataComponent

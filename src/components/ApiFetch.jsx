import React, {useEffect, useState}from 'react'

const ApiFetch = () => {

    const [apiData, setapiData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const api = await fetch("https://jsonplaceholder.typicode.com/todos")
            const data = await api.json()
            setapiData(data);
            console.log("my data = ",data)
        }

        fetchData();
    },[]);
  return (
    <div>
      {apiData.map((data)=> <div key={data.id}  style={{backgroundColor:'orange',margin:'10px',border: '2px solid blue', borderRadius: '10px',padding:'8px'}}>
        <h3>title={data.title}</h3>
      </div>)}
    </div>
  )
}

export default ApiFetch

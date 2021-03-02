import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const URL = "http://localhost:5000/api/Activities"

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(URL)
        setData(response.data)
      } catch (error) {
        console.log(error)
      }
    } 

    getData()
  },[])

  console.log(data, "hello")
  return (
    <div className="App">
     hello
     <ul>
       {data.map((item: any) => <li key={item.id}>{item.title}</li>)}
     </ul>
    </div>
  );
}

export default App;

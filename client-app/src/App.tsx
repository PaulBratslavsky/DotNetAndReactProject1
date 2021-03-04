import React, { useEffect, useState } from 'react';
import { Header, Container, List } from 'semantic-ui-react'
import axios from 'axios';

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
  }, [])

  return (

    <Container>
      <Header as="h2" icon="users" content="DotNet Events" />
      <List>
        {data.map((item: any) => <List.Item key={item.id}>{item.title}</List.Item>)}
      </List>
    </Container>
  );
}

export default App;

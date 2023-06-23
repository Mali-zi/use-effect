import React, { useState, useEffect } from 'react';
import './App.css';
import { User } from './models/index';
import { UserDetails } from './models/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

function App() {
  const initialDetails = {
    id: 0,
    name: "",
    avatar: "",
    details: {
        city: "",
        company: "",
        position: "",
    }
  };
  const [details, setDetails] = useState<UserDetails>(initialDetails);
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
        .then((response) => {
          setList(response.data);
        })
  }, []);

  return (
    <div className="App">
      <Container>
      <Row className="align-items-start justify-content-center">
        <Col>
          <List
            list={list}
            details={details}
            setDetails={setDetails}
          />
        </Col>
        <Col>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;

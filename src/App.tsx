import React, { useState, useEffect } from 'react';
import './App.css';
import { User } from './models/index';
import { UserDetails } from './models/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Details from './components/Details';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import axios from 'axios';

function App() {
  const initialInfo: UserDetails = {
    id: 1,
    name: "Dorthy McClure Sr.",
    avatar: "https://i.pravatar.cc/302",
    details: {
        city: "Sipesfort",
        company: "Hilll LLC",
        position: "Regional Identity Supervisor",
    }
  };
  const [info, setInfo] = useState<UserDetails>(initialInfo);
  const [list, setList] = useState<User[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
        .then((response) => {
          setList(response.data);
        })
  }, []);

  useEffect(() => {
    if (isLoading) {
      
    }
  }, [isLoading]);

  return (
    <div className="App">
      <div className='container'>
      <Row className="align-items-start justify-content-center">
        <Col>
          <List
            list={list}
            info={info}
            setInfo={setInfo}
            isLoading={isLoading}
            setLoading={setLoading}
          />
        </Col>
        <Col>
          <Details
            info={info}
            setInfo={setInfo}
          />
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;

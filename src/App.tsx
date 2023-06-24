import React, { useState, useEffect } from 'react';
import './App.css';
import { User } from './models/index';
import { UserDetails } from './models/index';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Details from './components/Details';
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
  const [isLoading, setLoading] = useState(false);
  const [id, setId] = useState<number>(0);

  return (
    <div className="App">
      <div className='container'>
      <Row className="align-items-start justify-content-center">
        <Col>
          <List
            setId={setId}
          />
        </Col>
        <Col>
        {id ? 
          <Details 
            id={id} 
            setLoading={setLoading}
            info={info}
            setInfo={setInfo}
          /> 
          : <>Choose a person</>}
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;

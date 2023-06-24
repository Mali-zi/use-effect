import { useState, useEffect } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Details from './components/Details';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { User } from './models/index';

function App() {
  const [id, setId] = useState<number>(0);
  const [list, setList] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`, {
      signal: controller.signal
    })
      .then((response) => {
        setList(response.data);
      });
      return () => {
        controller.abort()
      };
  }, []);

  return (
    <div className="App">
      <div className='container'>
      <Row className="align-items-start justify-content-center">
        <Col>
          {id === 0 ? <h4 className='loading'>Choose a person...</h4> : <></>}
          <List
            setId={setId}
            list={list}
          />
        </Col>
        <Col>
          <Details id={id} />
        </Col>
      </Row>
      </div>
    </div>
  );
}

export default App;

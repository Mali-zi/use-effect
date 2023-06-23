import { User, ListProps } from '../models/index';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';


/** 
 * Компонент CreatePosts выводит сообщения, введенные пользователем.
 * В качестве props принимает переменные состояния: posts и setPosts.
 */
export default function List({list, details, setDetails}: ListProps): React.ReactElement{
  function getDetails(id: number): void {
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
        .then((response) => {
          setDetails(response.data);
          setLoading(false);
        }
      );
    }, [isLoading]);
  
    let newList: JSX.Element[] = [<></>];
    newList = list.map(item => {
      return (
        <Button 
          key={item.id}
          as="li" 
          variant="outline-primary"
          size="lg"
          disabled={isLoading}
          onClick={() => getDetails(item.id)}
        >
          {item.name}
        </Button>
      )
    });
  };

  return (
    <ul className="btn-group-vertical" role="group" aria-label="Vertical button group">
      {newList}
    </ul>
  )
}
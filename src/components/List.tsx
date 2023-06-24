import { ListProps } from '../models/index';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { User } from '../models/index';


/** 
 * Компонент CreatePosts выводит сообщения, введенные пользователем.
 * В качестве props принимает переменные состояния: posts и setPosts.
 */
export default function List({setId}: ListProps): React.ReactElement{
  const [list, setList] = useState<User[]>([]);

  let newList: JSX.Element[] = [<></>];

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json`)
        .then((response) => {
          setList(response.data);
        })
  }, []);

  newList = list.map(item => {
    return (
      <Button 
        key={item.id}
        as="li" 
        variant="outline-primary"
        className="list-group-item"
        style={{borderRadius: 0}}
        onClick={() => setId(item.id)}
      >
        {item.name}
      </Button>
    )
  });

  return (
        <ul 
          className="list-group list-group-flush border border-secondary-subtle" 
          style={{width: "18rem", borderRadius: 0}}
        >
          {newList}
        </ul>

  )
}
import { ListProps } from '../models/index';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { inherits } from 'util';

/** 
 * Компонент CreatePosts выводит сообщения, введенные пользователем.
 * В качестве props принимает переменные состояния: posts и setPosts.
 */
export default function List({list, setInfo, isLoading, setLoading}: ListProps): React.ReactElement{

  function GetDetails(id: number): void {
    axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
      .then((response) => {
        const jdata = JSON.stringify(response.data);
        setInfo(JSON.parse(jdata));
        setLoading(false);
      }
    );
  }; 
  
    let newList: JSX.Element[] = [<></>];
    newList = list.map(item => {
      return (
        <Button 
          key={item.id}
          as="li" 
          variant="outline-primary"
          className="list-group-item"
          style={{borderRadius: 0}}
          disabled={isLoading}
          onClick={() => GetDetails(item.id)}
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
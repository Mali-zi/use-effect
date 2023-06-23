import { DetailsProps } from '../models/index';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


/** 
 * Компонент InputForm отрисовывает форму для ввода названия города и смещения 
 * в часах относительно Гринвича. По нажатию кнопки часы с соответствующими данными 
 * отображаются на экране.
 */
export default function Details({info, setInfo}: DetailsProps): React.ReactElement {

  return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={info.avatar} />
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Card.Title>{info.name}</Card.Title>
              </ListGroup.Item>
              <ListGroup.Item>City: {info.details.city}</ListGroup.Item>
              <ListGroup.Item>Company: {info.details.company}</ListGroup.Item>
              <ListGroup.Item>Position: {info.details.position}</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </div>
  )
}
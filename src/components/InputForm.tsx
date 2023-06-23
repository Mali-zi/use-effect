import { IProps1 } from '../models/index';
import ButtonSend from './ButtonSend';


/** 
 * Компонент InputForm отрисовывает форму для ввода названия города и смещения 
 * в часах относительно Гринвича. По нажатию кнопки часы с соответствующими данными 
 * отображаются на экране.
 */
export default function InputForm({ massage, setMassage, handleSubmit }: IProps1): React.ReactElement {

  return (
    <form 
      className='inputForm' 
      onSubmit={handleSubmit}
    >
      <label htmlFor='name'>New Note
      <textarea
        id='name'
        className='inputPlace'
        placeholder="Enter text here..."
        // rows={4} 
        // cols={40}
        value={massage} 
        onChange={(e) => setMassage(e.target.value)}
      />
      </label>
      <ButtonSend />
    </form>
  )
}
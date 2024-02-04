import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
// cada componente puede tener sus propios estados y hooks

const [inputValue, setInputValue] = useState('one punch');

const onInputChange = (event) =>{
  // console.log(event.target.value);
  setInputValue(event.target.value);
}

const onSubmit = (event) => {
  event.preventDefault();
  if(inputValue.trim().length <= 1) return;


  setInputValue('');
  onNewCategory( inputValue.trim() );

}

  return (
    <form onSubmit={ (event) => onSubmit(event) }>
        <input type="text"
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
        />
    </form>
  )
}

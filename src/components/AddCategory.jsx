import { useState } from "react"


export const AddCategory=({ onNewCategory}) =>{

    const [inputValue, setInputValue] = useState('');
    const onInputChange = ({ target }) => {
        //console.log(target.value);
        setInputValue(target.value);
}

    const onSubmit = (event) => {
        //console.log(event);
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        //console.log(setCategories);
        //setCategories( categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim())
        setInputValue('');
    }
    return (
      <form onSubmit={ onSubmit }>
            
      <input type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
          >
      </input>
          </form>
  )
}

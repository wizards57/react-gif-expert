
import { useState } from "react";
import {AddCategory, GifGrid } from './components';



export const GifExpertApp = () => {
const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories( [newCategory,...categories]);
        //setCategories( cat=> [...cat,"Mega dragon"]); // otra forma de agregar un elemento 
        //console.log('first')
    }

  return (
      <>
          
          <h1>GiftExpertApp</h1>
          
          <AddCategory
          
              onNewCategory={event =>onAddCategory(event)}
          />
          
          
            {categories.map((category) => (
                <GifGrid
                    key={category}
                    category={category}
                />
            )) }
          
      </>
  )
}

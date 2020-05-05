import React, { createContext, useState } from 'react';

export const ShoppingListContext = createContext();

const ShoppingListComponent = (props) => {

  const firstList = [
    {name: 'Apples', id: 1},
    {name: 'Pasta', id: 2},
    {name: 'Cookies', id: 3}
  ]

  const [list, setList] = useState(firstList);
  const [newItem, setNewItem] = useState('');

  const handleNewItem = (event) => {
    setNewItem(event.target.value);
  }

  return (
    <ShoppingListContext.Provider 
    value={{ list, newItem, handleNewItem: handleNewItem }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
}
 
export default ShoppingListComponent;

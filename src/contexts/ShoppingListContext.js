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
  const [newItemId, setNewItemId] = useState(0);

  const handleNewItem = (event) => {
    setNewItem(event.target.value);
    setNewItemId(list.length + 1);
  }

  const handleSubmitNewItem = (event) => {
    event.preventDefault();
    if (newItem !== '') {
      setList([...list, { name: newItem, id: newItemId }])
      setNewItem('');
      setNewItemId(0);
    }
  }

  return (
    <ShoppingListContext.Provider 
    value={{ list, newItem, handleNewItem: handleNewItem, handleSubmitNewItem: handleSubmitNewItem }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
}
 
export default ShoppingListComponent;

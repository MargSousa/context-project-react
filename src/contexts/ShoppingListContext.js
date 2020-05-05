import React, { createContext, useState } from 'react';

export const ShoppingListContext = createContext();

const ShoppingListComponent = (props) => {

  const [isEmpty, setIsEmpty] = useState(true);
  const [list, setList] = useState([]);
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
      setIsEmpty(false);
    }
  }

  const handleDeleteItem = (event) => {
    const id = Number(event.target.id);
    const newList = list.filter( item => item.id !== id)
    setList(newList);
    if (newList.length === 0) {
      setIsEmpty(!isEmpty);
    }
  }


  return (
    <ShoppingListContext.Provider 
    value={{ 
      list, 
      newItem, 
      isEmpty,
      handleNewItem: handleNewItem, 
      handleSubmitNewItem: handleSubmitNewItem,
      handleDeleteItem: handleDeleteItem
    }}>
      {props.children}
    </ShoppingListContext.Provider>
  );
}
 
export default ShoppingListComponent;

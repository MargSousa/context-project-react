import React, { useContext } from 'react';
import List from './List';
import { ShoppingListContext } from '../contexts/ShoppingListContext';

const AddItemInput = () => {
  const { newItem, handleNewItem } = useContext(ShoppingListContext);

  return (
    <div className="input">
      <div className="main-title">Grocery Shopping</div>
      <div>
        <label>Add new item: </label>
        <input type="text" value={newItem} onChange={handleNewItem}/>
        <div>{newItem}</div>
      </div>
      <List />
    </div>
  );
}
 
export default AddItemInput;
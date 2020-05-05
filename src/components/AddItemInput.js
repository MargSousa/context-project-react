import React, { useContext } from 'react';
import List from './List';
import { ShoppingListContext } from '../contexts/ShoppingListContext';

const AddItemInput = () => {
  const { newItem, handleNewItem, handleSubmitNewItem } = useContext(ShoppingListContext);

  return (
    <div className="input">
      <List />
      <div className="item-form">
        <form onSubmit={handleSubmitNewItem}>
          <input type="text" placeholder="Insert item to add to list..." value={newItem} onChange={handleNewItem}/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
 
export default AddItemInput;
import React, { useContext } from 'react';
import List from './List';
import { ShoppingListContext } from '../contexts/ShoppingListContext';

const AddItemInput = () => {
  const { newItem, handleNewItem, handleSubmitNewItem } = useContext(ShoppingListContext);

  return (
    <div className="input">
      <List />
      <div>
        <form onSubmit={handleSubmitNewItem}>
          <label>New item: </label>
          <input type="text" value={newItem} onChange={handleNewItem}/>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
}
 
export default AddItemInput;
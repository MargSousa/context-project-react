import React, { useContext } from 'react';
import { ShoppingListContext } from '../contexts/ShoppingListContext';
import ListItem from './ListItem';

const List = () => {
  const { list, handleDeleteItem, isEmpty } = useContext(ShoppingListContext);

  return (
    <div className="list">
      <div className="center list-title">Grocery Shopping List:</div>
      <div className={ isEmpty ? 'empty' : 'no-display'}>
        List is empty...
      </div>
      <div className={ isEmpty ? 'no-display' : 'center'}>
        <ul>
          {list.map((item => 
              <li key={item.id}><ListItem item={item.name} id={item.id} handleDeleteItem={handleDeleteItem}/></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default List;

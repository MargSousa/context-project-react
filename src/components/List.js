import React, { useContext } from 'react';
import { ShoppingListContext } from '../contexts/ShoppingListContext';
import ListItem from './ListItem';

const List = () => {
  const { list } = useContext(ShoppingListContext);

  return (
    <div className="list">
      <div className="list-title">Shopping List:</div>
      <ul>
      {list.map((item => 
          <li key={item.id}><ListItem item={item.name} /></li>
      ))}
      </ul>
    </div>
  );
}
 
export default List;

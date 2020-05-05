import React, { useContext } from 'react';
import { ShoppingListContext } from '../contexts/ShoppingListContext';
import ListItem from './ListItem';

const List = () => {
  const { list } = useContext(ShoppingListContext);

  return (
    <div className="list">
      <div className="center list-title">Grocery Shopping List:</div>
      <div className="center">
        <ul>
          {list.map((item => 
              <li key={item.id}><ListItem item={item.name} /></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
 
export default List;

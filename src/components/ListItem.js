import React from 'react';

const ListItem = (props) => {
  const { item, id, handleDeleteItem } = props;
  
  return (
    <div className="item">
      <div className="item-name">{item}</div>
      <div className="delete-icon" id={id} onClick={handleDeleteItem}></div>
    </div>
  );
}
 
export default ListItem;
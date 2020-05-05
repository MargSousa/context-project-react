import React from 'react';

const ListItem = (props) => {
  const { item } = props;
  
  return (
    <div className="item">
      <div className="item-name">{item}</div>
    </div>
  );
}
 
export default ListItem;
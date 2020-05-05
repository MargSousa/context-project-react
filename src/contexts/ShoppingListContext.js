import React, { createContext } from 'react';

export const ShoppingListContext = createContext();

const ShoppingListComponent = (props) => {
  return (
    <ShoppingListContext.Provider>
      {props.children}
    </ShoppingListContext.Provider>
  );
}
 
export default ShoppingListComponent;

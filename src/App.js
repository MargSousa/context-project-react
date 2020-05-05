import React from 'react';
import AddItemInput from './components/AddItemInput';
import ShoppingListComponent from './contexts/ShoppingListContext';

function App() {
  return (
    <div className="App">
      <ShoppingListComponent>
        <AddItemInput />
      </ShoppingListComponent>
    </div>
  );
}

export default App;

import { useState } from 'react';
import './App.css';

export default function App() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [lastItemNumber, setLastItemNumber] = useState(3);

  function handleAddItem() {
    setLastItemNumber(lastItemNumber + 1);
    setItems([...items, `Item ${lastItemNumber + 1}`]);
  }

  function handleRemoveItem() {
    if (items.length > 1) {
      setItems(items.slice(0, -1));
      setLastItemNumber(lastItemNumber - 1);
    }
  }

  return (
    <div className="app">
      <h1 className="big-title">Big Title</h1>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="counter-buttons">
        <button onClick={handleRemoveItem}>-</button>
        <button onClick={handleAddItem}>+</button>
      </div>
    </div>
  );
}

import './App.css';
import { useState } from 'react';
const InputComponent = ({ onAddItem }) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
   
      onAddItem(inputValue); 
      setInputValue(""); 
    
  };

  return (
    <div>
      <input type="text"placeholder="please Enter name"value={inputValue}onChange={(e) => setInputValue(e.target.value)}/>
      <button onClick={handleAdd}>
        Enter
      </button>
    </div>
  );
};


const ListComponent = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li>
          {item}
        </li>
      ))}
    </ul>
  );
};

// Main Component
const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div >
      <InputComponent onAddItem={handleAddItem} />
      <ListComponent items={items} />
    </div>
  );
};

export default App;

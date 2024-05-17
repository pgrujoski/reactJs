import React, { useState } from 'react';
import './App.css';
import Item from './Item';

const PackageList = () => {
  const [filter, setFilter] = useState('all');

  const items = [
    { name: 'Toothbrush', isPacked: true },
    { name: 'Towel', isPacked: false },
    { name: 'Shampoo', isPacked: true },
    { name: 'Socks', isPacked: false },
    { name: 'Underwear', isPacked: true}
  ];

  const filteredItems = items.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'packed') return item.isPacked;
    if (filter === 'unpacked') return !item.isPacked;
    return true;
  });

  return (
    <div>
      <h1>Package List</h1>
      <div className="buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('packed')}>Done</button>
        <button onClick={() => setFilter('unpacked')}>To-Do</button>
      </div>
      <ul>
        {filteredItems.map((item, index) => (
          <Item key={index} name={item.name} isPacked={item.isPacked} />
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <PackageList />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Item from './Item';

const PackageList = () => {
  const items = [
    { name: 'Toothbrush', isPacked: true },
    { name: 'Towel', isPacked: false },
    { name: 'Shampoo', isPacked: true },
    { name: 'Socks', isPacked: false },
  ];

  return (
    <div>
      <h1>Package List</h1>
      <ul>
        {items.map((item, index) => (
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

import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [data, setData] = useState({ cats: [], dogs: [] });

  useEffect(() => {
      axios.get('http://localhost:5000/data')
          .then(response => setData(response.data[0]))
          .catch(error => console.error('Error fetching data:', error));
  }, []);


  const sortPoroda = (data, i) => {
    if (i === 0) return ['nn'];
    if (i === 1) return data.cats;
    if (i === 2) return data.dogs;
    return [];
  }

  // let testBD = { "cats": ["cat1", "cat2", "cat3", "cat4"], "dogs": ["dog1", "dog2", "dog3", "dog4"] };
  let testBD = data;
  let porodaArr = selectedCategory ? sortPoroda(testBD, selectedCategory) : [];

  const Poroda = ({ data }) => {
    return (
      <div>
        <h1>Выберите категорию</h1>
        {data.map((item, index) => (
          <div key={index} className="poroda">{item}</div>
        ))}
      </div>
    );
  }

  return (
    <div className="App">
      <div></div>
      <div className="content">
        <div className="leftBar">
          <div className={`pets ${selectedCategory === 1 ? 'selected' : ''}`} onClick={() => setSelectedCategory(1)}>Cats</div>
          <div className={`pets ${selectedCategory === 2 ? 'selected' : ''}`} onClick={() => setSelectedCategory(2)}>Dogs</div>
        </div>
        <div className="rightBar">
          <Poroda key={'porodaidkdk'} data={porodaArr} />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;

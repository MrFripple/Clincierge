import { useState, useEffect } from 'react';
import './App.css';
import GlobalContext from './context /Global';
import FoodList from './FoodList';
import axios from 'axios';

function App() {
  const [foodImages, setFoodImages] = useState<string[]>([]);
  
  const addImage = () => {
    axios.get('/api')
    .then(({data}) => {
      setFoodImages([...foodImages, data.image])
    })
  }

  useEffect( () => 
    addImage()
  ,[]);
  return (
    <GlobalContext.Provider value={{foodImages, setFoodImages}}>
      <h1>Food Images</h1>
      <FoodList />
      <button onClick = {addImage}> Add Image</button>
    </GlobalContext.Provider>
  );
}

export default App;

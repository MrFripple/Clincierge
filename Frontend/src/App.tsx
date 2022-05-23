import { useState, useEffect, useContext } from 'react';
import './App.css';
import GlobalContext from './context /Global';
import FoodList from './FoodList';
import axios from 'axios';





function App() {
  const [foodImages, setFoodImages] = useState<string[]>([]);


  useEffect( () => {
    axios.get('/api')
    .then(({data}) => {
      setFoodImages([...foodImages, data.image])
    })
    }
  ,[]);

  return (
    <GlobalContext.Provider value={{foodImages, setFoodImages}}>
      <FoodList />
    </GlobalContext.Provider>
  );
}

export default App;

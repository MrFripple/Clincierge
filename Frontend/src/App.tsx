import { useState, useEffect, useContext } from 'react';
import './App.css';
import GlobalContext from './context /Global';
import axios from 'axios';





function App() {
  const [foodImages, setFoodImages] = useState('default');


  useEffect( () => {
    axios.get('/api')
    .then(({data}) => {
      setFoodImages(data.image)
    })
    }
  ,[]);

  return (
    <GlobalContext.Provider value={{}}>
      <img src = {foodImages} alt="default"></img>
    {/* <FoodList />
    <button onClick = >Refresh</button> */}
    </GlobalContext.Provider>
  );
}

export default App;

import { useContext } from 'react';
import GlobalContext from './context /Global';






function FoodList() {
  const { foodImages } = useContext(GlobalContext);
  console.log(foodImages);
  return (
   <>
   {foodImages.map((image: string) => 
         <img src = {image} alt="default" style = {{maxHeight: '20em', maxWidth: '20em'}}></img>

   )}
   </>

  );
}

export default FoodList;
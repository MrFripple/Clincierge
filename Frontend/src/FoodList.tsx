import { useContext } from 'react';
import GlobalContext from './context /Global';



function FoodList() {
  const { foodImages } = useContext(GlobalContext);
  return (
    <>
      {foodImages.map((image: string, index: number) => {
        return (
          <>
            <h3> image {index+1}
              <img src={image} alt="default" style={{ maxHeight: '20em', maxWidth: '20em' }}></img>
            </h3>
          </>
        )
      }

      )}
    </>
  );
}

export default FoodList;
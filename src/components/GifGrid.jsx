import { GifItem } from './GifItem'
import { useFetchGifs } from "./hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {

  const {images, isLoading} = useFetchGifs(category); //Customm hook

  return (
    <>
      <div className='clear-fix'></div>
      <h3>{category}</h3>
      { isLoading && <h2>Loading...</h2> }
      {
        images.map((images) => (
          <GifItem key={images.id} {...images} />
        ))
      }
      
      
    </>
    
  )
}

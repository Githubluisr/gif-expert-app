import { GifItem } from './GifItem'
import { useFetchGifs } from "./hooks/useFetchGifs";
import PropTypes from 'prop-types'

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


GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
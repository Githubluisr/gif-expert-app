import { render, screen } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem';

describe('Test on GifItem components', () => {
  const category = 'Han%20Solo' //tuve que buscarlo asi porque al regresarlo en la prueba le adiciona &20

  const images = {
    id:1,
    title: 'Title Test', 
    url: `https://api.giphy.com/v1/gifs/search?api_key=A97WbUNE1Ed9tUwxzRWgHyKncplinPrf&q=${category}&limit=10`
  }

  test('Must match snapshot', () => {
   
    // const title = "Saitama";
    // const url=`https://api.giphy.com/v1/gifs/search?api_key=A97WbUNE1Ed9tUwxzRWgHyKncplinPrf&q=${category}&limit=10`
    const { container } = render(<GifItem key={1}{ ...images }/>)

    expect(container).toMatchSnapshot();
  });

  test('Alt and url must be correct', () => {


    render(<GifItem key={1}{ ...images }/>)
    //screen.debug();

    const {src, alt} = screen.getByRole('img');
    expect(src).toBe(images.url);
    expect(alt).toBe(images.title);
    
  })


  test('Mostrar title en la pagina', ()=> {

    render(<GifItem key={1}{ ...images }/>)

    expect(screen.getByText(images.title));
  })

});
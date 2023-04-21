import { render, screen }  from  '@testing-library/react'
import { GifGrid } from '../../src/components/GifGrid' 
import { useFetchGifs } from '../../src/components/hooks/useFetchGifs';


jest.mock('../../src/components/hooks/useFetchGifs');

describe('Pruebas en Gif Grid', () => {
  
  const category = 'One Punch';
  test('debe mostrar el loading inicialmente', () => {
    
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category}/>);

    //screen.debug();
    expect(screen.getByText('Loading...')); // que aparezca loading...
    expect(screen.getByText(category)); //adicionalmente que tambien aparezca la categoria por ahi


  });

  test('Debe de mostrar imagenes al llamar useFetch Gifs', () => {
    
    const gifs = [
    {
      id:'ABC',
      title: 'Saitama',
      url: 'https://localhost/saitama.jpg'
    },
    {
      id:'123',
      title: 'Goku',
      url: 'https://localhost/goku.jpg'
    },
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })

    render(<GifGrid category={category}/>);
    //screen.debug()

    expect(screen.getAllByRole('img').length).toBe(2);

  });


});
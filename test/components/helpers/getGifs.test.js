import { render, screen } from '@testing-library/react'
import { any } from 'prop-types'
import { getGifs } from '../../../src/components/helpers/getGifs'

describe('pruebas en getGifs', () => {

  const category = 'stars'
  test('debe retornar un arreglo de gifs', async ()=> {

    const gifs = await getGifs(category)
   
    expect(gifs.length).toBeGreaterThanOrEqual(0); //valida que regrese al menos un elemento en el array
    expect(gifs[0]).toEqual(
      {
        id: expect.any(String),
        title: expect.any(String),
        url: expect.any(String)
      }
    )


  })


})
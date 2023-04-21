import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../../src/components/hooks/useFetchGifs";

describe('Pruebas en el hook useFectchGifs', () => {
  
  test('debe de regresar el estado incial', () => {
    // el estado inicial es un arreglo vacio de imagenes , isLOading true
    //Lo ideal es que pudieramos usar esto, pero no .. no se puede usar hooks fuera del body de un functional component
    // const { images , isLoading } = useFetchGifs();  Esto marca un error 
    // Para esto se usa renderHook:

    const { result } = renderHook(() => useFetchGifs('One Punch'));
    const { images, isLoading } = result.current;
    
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();

  });


  test('debe de retornar un arreglo de imagenes y isLoading tiene que ser falso', async () => {

    const { result } = renderHook(() => useFetchGifs('One Punch'));


    //Esperamos a que el arregloo se llene. waitFor tiene un default de un segundo para esperar y
    // si no, marcar error, pero tambien se puede modificar:
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0),
      {
        timeout: 6000
      }
    );

    const { images, isLoading } = result.current; 
    
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();

  } )

});
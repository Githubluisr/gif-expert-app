
import { fireEvent, render, screen } from "@testing-library/react";
import {AddCategory} from '../../src/components/AddCategory' 

describe('Pruebas en Add Category', () => {
  
  test('debe cambiar el valor del texto', () => {
    
    render(<AddCategory newCategory={() => {}}/>)
    

    //1. Disparar el evento con un valor
    //2. el paso anterior establee un nuevo estado
    //3. esto genera un nuevo valor en el input
    const input = screen.getByRole('textbox');
    
    fireEvent.input(input , {target: { value: 'Saitama'}} );
    
    expect(input.value).toBe('Saitama');
  });

  test('llamar onNewCategory si el input tiene valor', () => {

    const inputValue = 'Sintama';
    const newCategory = jest.fn(); //Establece una funcion de mentira ..pero sigue siendo funcion!!


    render(<AddCategory newCategory= { newCategory}/>);
    //screen.debug();
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, {target: {value:inputValue}});
    fireEvent.submit(form);
    
    expect(input.value).toBe(''); //Checa que se haya limpiado el valor pues se supone que se hecho submit

    //Sigue evaluar la funcion, se llamo? cuantas veces ? con que parametro ?
    expect( newCategory ).toHaveBeenCalled(); 
    expect( newCategory ).toHaveBeenCalledTimes(1);
    expect( newCategory ).toHaveBeenCalledWith(inputValue)

  })

  test('no debe de llamara la funcion newCategory si el input value viene vacio', () => {
    //NOTA: aqui no necesitamos llamar lo relacionado al input como la prueba anterior. Simplemente tomamos el form (vacio) y lo enviamos

    const newCategory = jest.fn();

    render(<AddCategory newCategory={newCategory}/>)

    const form = screen.getByRole('form');

    fireEvent.submit(form);

    //expect( newCategory ).toHaveBeenCalledTimes(0); no esta mal hacerlo  asi. opcion 1
    //opcion 2:
    expect(newCategory).not.toHaveBeenCalled();

  })

});
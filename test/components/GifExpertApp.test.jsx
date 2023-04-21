import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../../src/GifExpertApp";


describe('Pruebas en Gif Expert App', () => {
  
  test('Al enviar una categoria se ve en el DOM ', () => {
    const newCategoryValue = 'Luke Skywalker'

    render(<GifExpertApp />)
    
    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value:newCategoryValue}});
    fireEvent.submit(form);

    expect(screen.getByText(newCategoryValue));

  });

  test('Al enviar una categoria ya existente NO debe de llamarse el setCategories', () => {
    const newCategoryValue = 'Dart Vader' //Esta categoria ya existe

    render(<GifExpertApp />)

    const form = screen.getByRole('form');
    const input = screen.getByRole('textbox');

    fireEvent.input(input, {target: {value:newCategoryValue}});
    fireEvent.submit(form);

    expect(screen.getAllByText(newCategoryValue).length).toBe(1); //no debio de haber colocado una nueva categoria

  })


});
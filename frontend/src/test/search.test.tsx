import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';
import '@testing-library/jest-dom';
import Homepage from '@/pages';


describe('searchBar component', ()=>{
    // Definir los valores y funciones de las props como stubs o mocks
  const setup = () => {
    const utils = render(
      <SearchBar
        value="" // Valor inicial para el input
        onChange={() => {}} // Stub de la función de cambio
        placeholder="Search Pokémon" // Texto de placeholder
      />
    );
    const input = utils.getByPlaceholderText('Search Pokémon');
    return {
      input,
      ...utils,
    };
  };

  test('renders SearchBar component', () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  it('should render and allow user input', () => {
    const mockOnChange = jest.fn();
    const placeholderText = 'Search by Name';

    render(<SearchBar value="" onChange={mockOnChange} placeholder={placeholderText} />);

    // Verifica que el input está presente y se puede interactuar
    const inputElement = screen.getByPlaceholderText(placeholderText);
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, { target: { value: 'Pikachu' } });
    
    // Comprobar si onChange ha sido llamado con el nuevo valor
    expect(mockOnChange).toHaveBeenCalledWith('Pikachu');
  });
})

describe('Homepage Interaction', () => {
  let handleSearchMock:any;
  let handleClearMock:any;

  beforeEach(() => {
    handleSearchMock = jest.fn();
    handleClearMock = jest.fn();
    render(<Homepage  />);
  });

  it('should call handleSearch when search button is clicked', () => {
    const searchButton = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchButton);
    expect(handleSearchMock).toHaveBeenCalled();
  });

  it('should call handleClear when clear button is clicked', () => {
    const clearButton = screen.getByRole('button', { name: /clear/i });
    fireEvent.click(clearButton);
    expect(handleClearMock).toHaveBeenCalled();
  });
});


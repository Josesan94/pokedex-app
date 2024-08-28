import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/components/SearchBar';

describe('SearchBar', () => {
  const mockOnChange = jest.fn();
  const mockOnSearch = jest.fn();
  const mockOnClear = jest.fn();

  beforeEach(() => {
    render(
      <SearchBar
        value=""
        onChange={mockOnChange}
        onSearch={mockOnSearch}
        onClear={mockOnClear}
        placeholder="Search something..."
      />
    );
  });

  test('renders correctly with empty value', () => {
    const inputElement = screen.getByPlaceholderText('Search something...') as HTMLInputElement;
    expect(inputElement.value).toBe('');
  });

  test('calls onChange when input changes', () => {
    const inputElement = screen.getByPlaceholderText('Search something...');
    fireEvent.change(inputElement, { target: { value: 'Pikachu' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('Pikachu');
  });

  // Si tienes botones para buscar y limpiar, puedes agregar tests aquí similarmente
  // test('calls onSearch when search button is clicked', () => {
  //   const buttonElement = screen.getByRole('button', { name: 'Search by Name' });
  //   fireEvent.click(buttonElement);
  //   expect(mockOnSearch).toHaveBeenCalledTimes(1);
  // });

  // test('calls onClear when clear button is clicked', () => {
  //   const clearButton = screen.getByRole('button', { name: 'Clear' });
  //   // fireEvent.click(clearButton);
  //   expect(clearButton).toBeInTheDocument();
  // });
});
import { render, screen, fireEvent } from '@testing-library/react';
import Homepage from '@/pages/index'; // Asegúrate de que la ruta de importación es correcta
import '@testing-library/jest-dom';



describe('Homepage interactions', () => {
  beforeEach(() => {
    render(<Homepage />);
  });


  test('calls onClear when clear button is clicked', () => {
    
    const searchInput = screen.getByPlaceholderText('Search by Name') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'Pikachu' } });
    expect(searchInput.value).toBe('Pikachu');

    const searchTypeInput = screen.getByPlaceholderText('Search by Type') as HTMLInputElement;
    fireEvent.change(searchTypeInput, { target: { value: 'grass' } });
    expect(searchTypeInput.value).toBe('grass');

    const clearButton = screen.getByRole('button', { name: 'Clear' }) as HTMLInputElement;
    fireEvent.click(clearButton);
    expect(searchInput.value).toBe(''); // Verifica que el input está vacío después de limpiar
  });
});
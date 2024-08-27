import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string) => {
    const token = localStorage.getItem('jwtToken'); // Obtener el token almacenado
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    try {
      const response = await axios.get(url, { headers });
      return response.data;
    } catch (error) {
      console.error('Failed to fetch:', error);
      throw new Error('Failed to fetch data');
    }
  }

export function usePokemonDetails(url:string) {
    const {data, error} = useSWR(url,fetcher)

    return {
        pokemon:data,
        isLoading: !error && !data,
        isError: error
    }
}
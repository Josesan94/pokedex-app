import useSWR from 'swr';
import axios from 'axios';

const fetcher = async (url: string)  => {
    const response = await axios.get(url)
    const data = response.data
    return data;
}

export function usePokemonDetails(url:string) {
    const {data, error} = useSWR(url,fetcher)

    return {
        pokemon:data,
        isLoading: !error && !data,
        isError: error
    }
}
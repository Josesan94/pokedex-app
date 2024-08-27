import { ChangeEvent } from 'react';
import { SearchBarProps } from '@/interfaces/components.interfaces';
import { Button, Input } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const SearchBar = ({ value, onChange, onSearch, onClear, placeholder  }: SearchBarProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // Solo actualiza el valor del input
  };


    return (
        <div className="flex flex-row space-x-2">
            <Input
                type="text"
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                className="p-2 w-full rounded bg-white"
            />
      </div>
    );
  };
  
  export default SearchBar;
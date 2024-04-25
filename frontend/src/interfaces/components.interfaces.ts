export interface SearchBarProps {
    value: string;
    placeholder: string;
    onChange: (value: string) => void;
    onSearch:any;
    onClear: any
  }
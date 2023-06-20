import { ChangeEvent } from "react";
interface SearchFormProps {
  searchTerm: string;
  placeholder?: string;
  label?: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
}
export { SearchFormProps };

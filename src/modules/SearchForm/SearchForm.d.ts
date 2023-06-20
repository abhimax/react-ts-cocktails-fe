import { ChangeEvent } from "react";
interface ISearchFormProps {
  searchTerm: string;
  placeholder?: string;
  label?: string;
  handleSearchInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchClick: () => void;
}
export { ISearchFormProps };

import { FC } from "react";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { SearchFormProps } from "./SearchForm.d";

const SearchForm: FC<SearchFormProps> = ({
  searchTerm,
  placeholder,
  label,
  handleSearchInputChange,
  handleSearchClick,
}) => {
  return (
    <div className="search-form">
      <Input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearchInputChange}
        label={label}
      />
      <Button
        label="Search"
        onClick={handleSearchClick}
        primary
        isStretched
        size="medium"
      />
    </div>
  );
};

export default SearchForm;

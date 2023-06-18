import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktailSearch from "../hooks/use-cocktail-search";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";

const SearchResults: React.FC = () => {
  const { searchResults, favorites } = useSelector(
    (state: RootState) => state.cocktails
  );

  const { searchTerm, setSearchTerm, isLoading, handleSearch } =
    useCocktailSearch();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch();
  };

  return (
    <div>
      <h2>Search Results</h2>
      <div>
        <input
          type="text"
          placeholder="Search cocktails"
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        searchResults.map((cocktail: CocktailType) =>
          !favorites.some(
            (favCocktail) => favCocktail.idDrink === cocktail.idDrink
          ) ? (
            <Cocktail key={cocktail.idDrink} cocktail={cocktail} showButtons />
          ) : null
        )
      )}
    </div>
  );
};

export default SearchResults;

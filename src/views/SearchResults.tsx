import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setSearchResults } from "../store";
import Cocktail from "../modules/Cocktail/Cocktail";
import { searchCocktails } from "../services/cocktailApi";
import useCocktails from "../hooks/use-cocktails";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";

const SearchResults: React.FC = () => {
  const { searchResults, favorites } = useSelector(
    (state: RootState) => state.cocktails
  );

  const dispatch = useDispatch();
  const { handleSetFavorites } = useCocktails();
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleAddToFavorites = (cocktail: CocktailType) => {
    const updatedFavorites = [...favorites, cocktail];
    handleSetFavorites(updatedFavorites);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const results = await searchCocktails(searchTerm);
      dispatch(setSearchResults(results));
    } catch (error) {
      // Handle error
    }
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
        <button onClick={handleSearch}>Search</button>
      </div>
      {searchResults.map((cocktail: CocktailType) =>
        !favorites.some(
          (favCocktail) => favCocktail.idDrink === cocktail.idDrink
        ) ? (
          <Cocktail
            key={cocktail.idDrink}
            cocktail={cocktail}
            showButtons={true}
            onAddToFavorites={handleAddToFavorites}
          />
        ) : (
          ""
        )
      )}
    </div>
  );
};

export default SearchResults;

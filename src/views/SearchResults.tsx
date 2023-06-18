import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setSearchResults } from "../store";
import { addToFavorites } from "../store";
import Cocktail from "../modules/Cocktail";
import { searchCocktails } from "../services/cocktailApi";

const SearchResults: React.FC = () => {
  const { searchResults, favorites } = useSelector(
    (state: RootState) => state.cocktails
  );

  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleAddToFavorites = (cocktail: any) => {
    dispatch(addToFavorites(cocktail));
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    console.log(event.target.value);
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
      {searchResults.map((cocktail) => (
        <Cocktail
          key={cocktail.idDrink}
          cocktail={cocktail}
          showButtons={true}
          isFavorite={favorites.some(
            (favCocktail) => favCocktail.idDrink === cocktail.idDrink
          )}
          onAddToFavorites={handleAddToFavorites}
        />
      ))}
    </div>
  );
};

export default SearchResults;
export {};

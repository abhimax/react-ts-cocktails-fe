import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRandomCocktails, setSearchResults, addToFavorites } from "./store";
import { fetchRandomCocktails, searchCocktails } from "./services/cocktailApi";
import { RootState } from "./store";
import Cocktail from "./modules/Cocktail";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { randomCocktails, searchResults, favorites } = useSelector(
    (state: RootState) => state.cocktails
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const cocktails = await fetchRandomCocktails(5);
        dispatch(setRandomCocktails(cocktails));
      } catch (error) {
        // Handle error
      }
    };

    fetchCocktails();
  }, []);

  const handleSearch = async () => {
    try {
      const results = await searchCocktails(searchTerm);
      dispatch(setSearchResults(results));
    } catch (error) {
      // Handle error
    }
  };

  const handleAddToFavorites = (cocktail: Cocktail) => {
    dispatch(addToFavorites(cocktail));
  };

  return (
    <div>
      <h1>Home</h1>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {randomCocktails.map((cocktail) => (
        <Cocktail
          key={cocktail.idDrink}
          cocktail={cocktail}
          onAddToFavorites={handleAddToFavorites}
        />
      ))}
      {searchResults.length > 0 && (
        <>
          <h2>Search Results:</h2>
          {searchResults.map((cocktail) => (
            <Cocktail
              key={cocktail.idDrink}
              cocktail={cocktail}
              onAddToFavorites={handleAddToFavorites}
            />
          ))}
        </>
      )}

      {favorites.length > 0 && (
        <div className="favorites-container">
          <h2>Favorites:</h2>
          {favorites.map((cocktail) => (
            <Cocktail
              key={cocktail.idDrink}
              cocktail={cocktail}
              onAddToFavorites={handleAddToFavorites}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

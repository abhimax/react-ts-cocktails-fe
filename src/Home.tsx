import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRandomCocktails, setSearchResults } from "./store";
import { fetchRandomCocktails, searchCocktails } from "./services/cocktailApi";
import { RootState } from "./store";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { randomCocktails, searchResults } = useSelector(
    (state: RootState) => state.cocktails
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const cocktails = await fetchRandomCocktails(5);
        dispatch(setRandomCocktails(cocktails));
      } catch (error) {
        console.error("Error fetching random cocktails:", error);
      }
    };

    fetchCocktails();
  }, [dispatch]);

  const handleSearch = async () => {
    try {
      const results = await searchCocktails(searchTerm);
      dispatch(setSearchResults(results));
    } catch (error) {
      console.error("Error searching cocktails:", error);
    }
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
        <div key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <h3>{cocktail.strDrink}</h3>
          <p>{cocktail.strCategory}</p>
        </div>
      ))}
      {searchResults.length > 0 && (
        <>
          <h2>Search Results:</h2>
          {searchResults.map((cocktail) => (
            <div key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
              <h3>{cocktail.strDrink}</h3>
              <p>{cocktail.strCategory}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Home;

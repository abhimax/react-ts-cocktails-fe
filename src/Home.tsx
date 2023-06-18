import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setRandomCocktails,
  setSearchResults,
  addToFavorites,
  removeFromFavorites,
} from "./store";
import { fetchRandomCocktails, searchCocktails } from "./services/cocktailApi";
import { RootState } from "./store";
import Cocktail from "./modules/Cocktail";
import RandomItems from "./views/RandomItems";
import SearchResults from "./views/SearchResults";
import Favorites from "./views/Favorites";

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

  const handleRemoveFromFavorites = (cocktailId: string) => {
    dispatch(removeFromFavorites(cocktailId));
  };

  return (
    <div>
      <h1>Home</h1>
      <RandomItems />
      <SearchResults />
      <Favorites />
    </div>
  );
};

export default Home;

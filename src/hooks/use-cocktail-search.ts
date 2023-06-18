import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearchResults } from "../store";
import { searchCocktails } from "../services/cocktailApi";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";

const useCocktailSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResultsLocal] = useState<CocktailType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const results = await searchCocktails(searchTerm);
      setSearchResultsLocal(results);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // Handle error
    }
  };

  useEffect(() => {
    dispatch(setSearchResults(searchResults));
  }, [dispatch, searchResults]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    isLoading,
    handleSearch,
  };
};

export default useCocktailSearch;

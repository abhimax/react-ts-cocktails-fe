import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRandomCocktails } from "../services/cocktailApi";
import { setFavorites } from "../store";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";

const useCocktails = () => {
  const [randomCocktails, setRandomCocktails] = useState<CocktailType[]>([]);
  const [favorites, setFavoritesLocal] = useState<CocktailType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch = useDispatch();

  const fetchCocktails = async () => {
    try {
      setIsLoading(true);
      const cocktails: CocktailType[] = await fetchRandomCocktails(5);
      setRandomCocktails(cocktails);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      // Handle error
    }
  };

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoritesLocal(JSON.parse(storedFavorites));
    }
    fetchCocktails();
  }, []);

  const handleAddToFavorites = (cocktail: CocktailType) => {
    const updatedFavorites = [...favorites, cocktail];
    setFavoritesLocal(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleRemoveFromFavorites = (cocktailId: string) => {
    const updatedFavorites = favorites.filter(
      (cocktail) => cocktail.idDrink !== cocktailId
    );
    setFavoritesLocal(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const handleSetFavorites = (value: CocktailType[]) => {
    setFavoritesLocal(value);
    localStorage.setItem("favorites", JSON.stringify(value));
  };

  useEffect(() => {
    dispatch(setFavorites(favorites));
  }, [dispatch, favorites]);

  return {
    randomCocktails,
    favorites,
    isLoading,
    fetchCocktails,
    handleAddToFavorites,
    handleRemoveFromFavorites,
    handleSetFavorites,
  };
};

export default useCocktails;

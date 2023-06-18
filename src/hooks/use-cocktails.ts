import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRandomCocktails } from "../services/cocktailApi";
import { setFavorites } from "../store";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";

const useCocktails = () => {
  const [randomCocktails, setRandomCocktails] = useState<CocktailType[]>([]);
  const [favorites, setFavoritesLocal] = useState<CocktailType[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const cocktails = await fetchRandomCocktails(5);
        setRandomCocktails(cocktails);
      } catch (error) {
        // Handle error
      }
    };

    fetchCocktails();
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoritesLocal(JSON.parse(storedFavorites));
    }
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

  const handleSetFavorites = (value: React.SetStateAction<CocktailType[]>) => {
    setFavoritesLocal(value);
    localStorage.setItem("favorites", JSON.stringify(value));
  };

  useEffect(() => {
    dispatch(setFavorites(favorites));
  }, [dispatch, favorites]);

  return {
    randomCocktails,
    favorites,
    handleAddToFavorites,
    handleRemoveFromFavorites,
    handleSetFavorites,
  };
};

export default useCocktails;

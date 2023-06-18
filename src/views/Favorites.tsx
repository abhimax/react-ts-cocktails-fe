import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, setFavorites, removeFromFavorites } from "../store";
import Cocktail from "../modules/Cocktail";

const Favorites: React.FC = () => {
  const favorites = useSelector(
    (state: RootState) => state.cocktails.favorites
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      dispatch(setFavorites(JSON.parse(storedFavorites)));
    }
  }, [dispatch]);

  const handleRemoveFromFavorites = (cocktailId: string) => {
    dispatch(removeFromFavorites(cocktailId));
  };

  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((cocktail) => (
        <Cocktail
          key={cocktail.idDrink}
          cocktail={cocktail}
          showButtons={true}
          isFavorite={true}
          onRemoveFromFavorites={handleRemoveFromFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
export {};

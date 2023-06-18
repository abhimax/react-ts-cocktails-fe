import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, removeFromFavorites } from "../store";
import Cocktail from "../modules/Cocktail";

const Favorites: React.FC = () => {
  const favorites = useSelector(
    (state: RootState) => state.cocktails.favorites
  );
  const dispatch = useDispatch();

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

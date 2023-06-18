import React, { useEffect } from "react";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktails from "../hooks/use-cocktails";

const Favorites: React.FC = () => {
  const { favorites, handleRemoveFromFavorites, handleSetFavorites } =
    useCocktails();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      handleSetFavorites(JSON.parse(storedFavorites));
    }
  }, [handleSetFavorites]);

  const handleRemove = (cocktailId: string) => {
    handleRemoveFromFavorites(cocktailId);
    const updatedFavorites = favorites.filter(
      (cocktail) => cocktail.idDrink !== cocktailId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
          onRemoveFromFavorites={handleRemove}
        />
      ))}
    </div>
  );
};

export default Favorites;

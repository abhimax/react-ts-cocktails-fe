import React from "react";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktails from "../hooks/use-cocktails";

const RandomItems: React.FC = () => {
  const { randomCocktails, isLoading, fetchCocktails } = useCocktails();

  const handleRefresh = () => {
    fetchCocktails();
  };

  return (
    <div>
      <h2>Random Items</h2>
      <button onClick={handleRefresh}>Refresh</button>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        randomCocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.idDrink}
            cocktail={cocktail}
            showButtons={false}
            isFavorite={false}
          />
        ))
      )}
    </div>
  );
};

export default RandomItems;

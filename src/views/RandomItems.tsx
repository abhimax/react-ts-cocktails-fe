import React from "react";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktails from "../hooks/use-cocktails";

const RandomItems: React.FC = () => {
  const { randomCocktails } = useCocktails();

  return (
    <div>
      <h2>Random Items</h2>
      {randomCocktails.map((cocktail) => (
        <Cocktail
          key={cocktail.idDrink}
          cocktail={cocktail}
          showButtons={false}
          isFavorite={false}
        />
      ))}
    </div>
  );
};

export default RandomItems;

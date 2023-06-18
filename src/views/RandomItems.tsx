import React, { useEffect, useState } from "react";
import { fetchRandomCocktails } from "../services/cocktailApi";
import Cocktail from "../modules/Cocktail";

const RandomItems: React.FC = () => {
  const [randomCocktails, setRandomCocktails] = useState<any[]>([]);

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
export {};

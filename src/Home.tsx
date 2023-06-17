import React, { useEffect, useState } from "react";
import { fetchRandomCocktails } from "./services/cocktailApi";

const Home: React.FC = () => {
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

  console.log(randomCocktails);

  return (
    <div>
      <h1>Home</h1>
      {randomCocktails.map((cocktail) => (
        <div key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <h3>{cocktail.strDrink}</h3>
          <p>{cocktail.strCategory}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

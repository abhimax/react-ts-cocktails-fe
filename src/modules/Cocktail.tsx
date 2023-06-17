interface CocktailProps {
  cocktail: {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
  };
  onAddToFavorites: (cocktail: any) => void;
}

const Cocktail: React.FC<CocktailProps> = ({ cocktail, onAddToFavorites }) => {
  const { idDrink, strDrink, strCategory, strDrinkThumb } = cocktail;

  const handleAddToFavorites = () => {
    onAddToFavorites(cocktail);
  };

  return (
    <div key={idDrink}>
      <img src={strDrinkThumb} alt={strDrink} />
      <h3>{strDrink}</h3>
      <p>{strCategory}</p>
      <button onClick={handleAddToFavorites}>Add to Favorites</button>
    </div>
  );
};

export default Cocktail;

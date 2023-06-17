import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../store";

interface CocktailProps {
  cocktail: {
    idDrink: string;
    strDrink: string;
    strCategory: string;
    strDrinkThumb: string;
  };
  onAddToFavorites: (cocktail: any) => void;
  onRemoveFromFavorites: (cocktailId: string) => void;
  isFavorite: boolean;
}

const Cocktail: React.FC<CocktailProps> = ({ cocktail, isFavorite }) => {
  const { idDrink, strDrink, strCategory, strDrinkThumb } = cocktail;

  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(cocktail));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(cocktail.idDrink));
  };

  return (
    <div className="cocktail">
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
      {isFavorite ? (
        <button onClick={handleRemoveFromFavorites}>Remove</button>
      ) : (
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
      )}
    </div>
  );
};

export default Cocktail;

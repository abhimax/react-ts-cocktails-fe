import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store";
import { CocktailType } from "./types/CocktailType";

interface CocktailProps {
  cocktail: CocktailType;
  showButtons: boolean;
  isFavorite?: boolean;
  onAddToFavorites?: (cocktail: any) => void;
  onRemoveFromFavorites?: (cocktailId: string) => void;
}

const Cocktail: React.FC<CocktailProps> = ({
  cocktail,
  isFavorite,
  showButtons,
}) => {
  const { idDrink, strDrink, strCategory, strDrinkThumb } = cocktail;

  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(cocktail));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(cocktail.idDrink));
  };

  return (
    <div>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
      {showButtons && (
        <>
          {isFavorite ? (
            <button onClick={handleRemoveFromFavorites}>Remove</button>
          ) : (
            <button onClick={handleAddToFavorites}>Add to Favorites</button>
          )}
        </>
      )}
    </div>
  );
};

export default Cocktail;

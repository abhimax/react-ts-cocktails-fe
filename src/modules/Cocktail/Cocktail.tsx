import { useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../store";
import { CocktailType } from "./types/CocktailType";
import { Button } from "../../components/Button";

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
    <div className="cocktail-tile" key={cocktail.idDrink}>
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
      <div className="buttons">
        {showButtons && (
          <>
            {isFavorite ? (
              <Button
                label="Remove"
                onClick={handleRemoveFromFavorites}
                size="small"
              />
            ) : (
              <Button
                label="Add to Favorites"
                onClick={handleAddToFavorites}
                size="small"
                primary
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cocktail;

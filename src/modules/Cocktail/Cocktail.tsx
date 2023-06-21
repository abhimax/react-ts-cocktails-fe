import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../store/slices/cocktailsSlice";
import { Button } from "../../components/Button";
import { ICocktailProps } from "./Cocktail.d";
import { FC } from "react";

const Cocktail: FC<ICocktailProps> = ({
  cocktail,
  isFavorite,
  showButtons,
}) => {
  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(cocktail));
  };

  const handleRemoveFromFavorites = () => {
    dispatch(removeFromFavorites(cocktail.idDrink));
  };

  return (
    <div
      className={`${showButtons ? "cocktail-tile" : "cocktail-tile no-action"}`}
      key={cocktail.idDrink}
    >
      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      <h3>{cocktail.strDrink}</h3>
      <p>{cocktail.strCategory}</p>
      {showButtons && (
        <div className="buttons">
          {isFavorite ? (
            <Button
              label="Remove"
              onClick={handleRemoveFromFavorites}
              size="small"
            />
          ) : (
            <Button
              label="Add"
              onClick={handleAddToFavorites}
              size="small"
              primary
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Cocktail;

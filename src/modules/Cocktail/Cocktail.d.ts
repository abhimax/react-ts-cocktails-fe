import { CocktailType } from "./types/CocktailType";
interface ICocktailProps {
  cocktail: CocktailType;
  showButtons: boolean;
  isFavorite?: boolean;
}
export { ICocktailProps };

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useDispatch } from "react-redux";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../../store/slices/cocktailsSlice";
import Cocktail from "../Cocktail";
import { CocktailType } from "../types/CocktailType";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

jest.mock("../../../store/slices/cocktailsSlice", () => ({
  addToFavorites: jest.fn(),
  removeFromFavorites: jest.fn(),
}));

describe("Cocktail component", () => {
  const mockDispatch = jest.fn();
  const mockCocktail: CocktailType = {
    idDrink: "1",
    strDrink: "Mojito",
    strCategory: "Cocktail",
    strDrinkThumb: "mojito.jpg",
  };

  beforeEach(() => {
    (useDispatch as jest.Mock).mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should render the cocktail details", () => {
    render(
      <Cocktail cocktail={mockCocktail} showButtons={true} isFavorite={false} />
    );

    expect(screen.getByAltText(mockCocktail.strDrink)).toBeInTheDocument();
    expect(screen.getByText(mockCocktail.strDrink)).toBeInTheDocument();
    expect(screen.getByText(mockCocktail.strCategory)).toBeInTheDocument();
  });

  it('should render the "Add to Favorites" button when isFavorite is false', () => {
    render(
      <Cocktail cocktail={mockCocktail} showButtons={true} isFavorite={false} />
    );

    const addToFavoritesButton = screen.getByText("Add to Favorites");
    expect(addToFavoritesButton).toBeInTheDocument();

    fireEvent.click(addToFavoritesButton);
    expect(mockDispatch).toHaveBeenCalledWith(addToFavorites(mockCocktail));
  });

  it('should render the "Remove" button when isFavorite is true', () => {
    render(
      <Cocktail cocktail={mockCocktail} showButtons={true} isFavorite={true} />
    );

    const removeFromFavoritesButton = screen.getByText("Remove");
    expect(removeFromFavoritesButton).toBeInTheDocument();

    fireEvent.click(removeFromFavoritesButton);
    expect(mockDispatch).toHaveBeenCalledWith(
      removeFromFavorites(mockCocktail.idDrink)
    );
  });

  it("should not render the buttons when showButtons is false", () => {
    render(
      <Cocktail
        cocktail={mockCocktail}
        showButtons={false}
        isFavorite={false}
      />
    );

    const addToFavoritesButton = screen.queryByText("Add to Favorites");
    const removeFromFavoritesButton = screen.queryByText("Remove");

    expect(addToFavoritesButton).not.toBeInTheDocument();
    expect(removeFromFavoritesButton).not.toBeInTheDocument();
  });
});

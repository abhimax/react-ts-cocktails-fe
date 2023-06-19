import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CocktailType {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

interface CocktailsState {
  randomCocktails: CocktailType[];
  searchResults: CocktailType[];
  favorites: CocktailType[];
}

const initialState: CocktailsState = {
  randomCocktails: [],
  searchResults: [],
  favorites: [],
};

const cocktailsSlice = createSlice({
  name: "cocktails",
  initialState,
  reducers: {
    setRandomCocktails: (state, action: PayloadAction<CocktailType[]>) => {
      state.randomCocktails = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<CocktailType[]>) => {
      state.searchResults = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<CocktailType>) => {
      const cocktail = action.payload;
      state.favorites.push(cocktail);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const cocktailId = action.payload;
      state.favorites = state.favorites.filter(
        (cocktail) => cocktail.idDrink !== cocktailId
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setFavorites: (state, action: PayloadAction<CocktailType[]>) => {
      state.favorites = action.payload;
    },
  },
});

export const {
  setRandomCocktails,
  setSearchResults,
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} = cocktailsSlice.actions;

export default cocktailsSlice.reducer;

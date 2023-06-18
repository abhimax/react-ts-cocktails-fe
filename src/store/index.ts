import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cocktail {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strDrinkThumb: string;
}

interface CocktailsState {
  randomCocktails: Cocktail[];
  searchResults: Cocktail[];
  favorites: Cocktail[];
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
    setRandomCocktails: (state, action: PayloadAction<Cocktail[]>) => {
      state.randomCocktails = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<Cocktail[]>) => {
      state.searchResults = action.payload;
      console.log(" >>> state.searchResults: ", state.searchResults);
    },
    addToFavorites: (state, action: PayloadAction<Cocktail>) => {
      state.favorites.push(action.payload);
      console.log(" >>> state.favorites: ", state.favorites);
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(
        (cocktail) => cocktail.idDrink !== action.payload
      );
    },
  },
});

export const {
  setRandomCocktails,
  setSearchResults,
  addToFavorites,
  removeFromFavorites,
} = cocktailsSlice.actions;

export type RootState = ReturnType<typeof store.getState>; // Export RootState type correctly

const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice.reducer,
  },
});

export default store;

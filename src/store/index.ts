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
}

const initialState: CocktailsState = {
  randomCocktails: [],
  searchResults: [],
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
    },
  },
});

export const { setRandomCocktails, setSearchResults } = cocktailsSlice.actions;

export type RootState = ReturnType<typeof store.getState>; // Export RootState type correctly

const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice.reducer,
  },
});

export default store;

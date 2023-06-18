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
    addToFavorites: (state, action: PayloadAction<any>) => {
      const cocktail = action.payload;
      state.favorites.push(cocktail);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const cocktailId = action.payload;
      state.favorites = state.favorites.filter(
        (cocktail: any) => cocktail.idDrink !== cocktailId
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    setFavorites: (state, action: PayloadAction<any[]>) => {
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

export type RootState = ReturnType<typeof store.getState>; // Export RootState type correctly

const store = configureStore({
  reducer: {
    cocktails: cocktailsSlice.reducer,
  },
});

export default store;

import reducer, {
  setRandomCocktails,
  setSearchResults,
  addToFavorites,
  removeFromFavorites,
  setFavorites,
} from "../slices/cocktailsSlice";

describe("Cocktails actions", () => {
  it("should create an action to set random cocktails", () => {
    const cocktails = [
      {
        idDrink: "1",
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "mojito.jpg",
      },
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ];

    const expectedAction = {
      type: setRandomCocktails.type,
      payload: cocktails,
    };

    expect(setRandomCocktails(cocktails)).toEqual(expectedAction);
  });

  it("should create an action to set search results", () => {
    const cocktails = [
      {
        idDrink: "1",
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "mojito.jpg",
      },
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ];

    const expectedAction = {
      type: setSearchResults.type,
      payload: cocktails,
    };

    expect(setSearchResults(cocktails)).toEqual(expectedAction);
  });

  it("should create an action to add a cocktail to favorites", () => {
    const cocktail = {
      idDrink: "1",
      strDrink: "Mojito",
      strCategory: "Cocktail",
      strDrinkThumb: "mojito.jpg",
    };

    const expectedAction = {
      type: addToFavorites.type,
      payload: cocktail,
    };

    expect(addToFavorites(cocktail)).toEqual(expectedAction);
  });

  it("should create an action to remove a cocktail from favorites", () => {
    const cocktailId = "1";

    const expectedAction = {
      type: removeFromFavorites.type,
      payload: cocktailId,
    };

    expect(removeFromFavorites(cocktailId)).toEqual(expectedAction);
  });

  it("should create an action to set favorites", () => {
    const favorites = [
      {
        idDrink: "1",
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "mojito.jpg",
      },
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ];

    const expectedAction = {
      type: setFavorites.type,
      payload: favorites,
    };

    expect(setFavorites(favorites)).toEqual(expectedAction);
  });
});

describe("Cocktails reducer", () => {
  it("should handle setRandomCocktails action", () => {
    const initialState = {
      randomCocktails: [],
      searchResults: [],
      favorites: [],
    };

    const cocktails = [
      {
        idDrink: "1",
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "mojito.jpg",
      },
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ];

    const action = setRandomCocktails(cocktails);

    const nextState = reducer(initialState, action);

    expect(nextState.randomCocktails).toEqual(cocktails);
  });

  it("should handle setSearchResults action", () => {
    const initialState = {
      randomCocktails: [],
      searchResults: [],
      favorites: [],
    };

    const cocktails = [
      {
        idDrink: "1",
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "mojito.jpg",
      },
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ];

    const action = setSearchResults(cocktails);

    const nextState = reducer(initialState, action);

    expect(nextState.searchResults).toEqual(cocktails);
  });

  it("should handle addToFavorites action", () => {
    const initialState = {
      randomCocktails: [],
      searchResults: [],
      favorites: [],
    };

    const cocktail = {
      idDrink: "1",
      strDrink: "Mojito",
      strCategory: "Cocktail",
      strDrinkThumb: "mojito.jpg",
    };

    const action = addToFavorites(cocktail);

    const nextState = reducer(initialState, action);

    expect(nextState.favorites).toEqual([cocktail]);
  });

  it("should handle removeFromFavorites action", () => {
    const initialState = {
      randomCocktails: [],
      searchResults: [],
      favorites: [
        {
          idDrink: "1",
          strDrink: "Mojito",
          strCategory: "Cocktail",
          strDrinkThumb: "mojito.jpg",
        },
        {
          idDrink: "2",
          strDrink: "Cosmopolitan",
          strCategory: "Cocktail",
          strDrinkThumb: "cosmo.jpg",
        },
      ],
    };

    const cocktailId = "1";

    const action = removeFromFavorites(cocktailId);

    const nextState = reducer(initialState, action);

    expect(nextState.favorites).toEqual([
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ]);
  });

  it("should handle setFavorites action", () => {
    const initialState = {
      randomCocktails: [],
      searchResults: [],
      favorites: [],
    };

    const favorites = [
      {
        idDrink: "1",
        strDrink: "Mojito",
        strCategory: "Cocktail",
        strDrinkThumb: "mojito.jpg",
      },
      {
        idDrink: "2",
        strDrink: "Cosmopolitan",
        strCategory: "Cocktail",
        strDrinkThumb: "cosmo.jpg",
      },
    ];

    const action = setFavorites(favorites);

    const nextState = reducer(initialState, action);

    expect(nextState.favorites).toEqual(favorites);
  });
});

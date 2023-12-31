import axios from "axios";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

// Function to fetch random cocktails
export const fetchRandomCocktails = async (count: number) => {
  try {
    const cocktails: any[] = [];

    for (let i = 0; i < count; i++) {
      const response = await axios.get(`${BASE_URL}/random.php`);
      cocktails.push(response.data.drinks[0]);
    }

    return cocktails;
  } catch (error) {
    // Handle error
    console.error("Error fetching random cocktails:", error);
    throw error;
  }
};

// Function to search for cocktails by name
export const searchCocktails = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
    return response.data.drinks;
  } catch (error) {
    // Handle error
    console.error("Error searching cocktails:", error);
    throw error;
  }
};

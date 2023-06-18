import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktailSearch from "../hooks/use-cocktail-search";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";
import { Col, Row } from "react-grid-system";
import { Loader } from "../components/Loader";

const SearchResults: React.FC = () => {
  const { searchResults, favorites } = useSelector(
    (state: RootState) => state.cocktails
  );

  const { searchTerm, setSearchTerm, isLoading, handleSearch } =
    useCocktailSearch();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch();
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h2 className="sub-header">Search Results</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <input
              type="text"
              placeholder="Search cocktails"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button onClick={handleSearchClick}>Search</button>
          </Col>
        </Row>
        <Row>
          {isLoading ? (
            <Col>
              <Loader />
            </Col>
          ) : (
            searchResults.map((cocktail: CocktailType) =>
              !favorites.some(
                (favCocktail) => favCocktail.idDrink === cocktail.idDrink
              ) ? (
                <Col xs={6} md={4} lg={3} xl={2} key={cocktail.idDrink}>
                  <Cocktail
                    key={cocktail.idDrink}
                    cocktail={cocktail}
                    showButtons
                  />
                </Col>
              ) : null
            )
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default SearchResults;

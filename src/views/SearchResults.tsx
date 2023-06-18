import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktailSearch from "../hooks/use-cocktail-search";
import { CocktailType } from "../modules/Cocktail/types/CocktailType";
import { Col, Row } from "react-grid-system";
import { Loader } from "../components/Loader";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import SearchForm from "../modules/SearchForm/SearchForm";

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
          <Col md={6}>
            <SearchForm
              placeholder="Enter Cocktail Name"
              searchTerm={searchTerm}
              handleSearchInputChange={handleSearchInputChange}
              label="Search Cocktails"
              handleSearchClick={handleSearchClick}
            />
          </Col>
        </Row>
        {/* <Row>
          <Col>
            <Input
              type="text"
              placeholder="Enter Cocktail Name"
              value={searchTerm}
              onChange={handleSearchInputChange}
              label="Search Cocktails"
            />
            <Button label="Search" onClick={handleSearchClick} primary />
          </Col>
        </Row> */}

        {isLoading && (
          <Row>
            <Col>
              <Loader message="Search Cocktails..." />
            </Col>
          </Row>
        )}

        {searchResults.length > 0 && (
          <Row>
            <Col>
              <Row>
                <Col>
                  <h2 className="sub-header">Search Results</h2>
                </Col>
              </Row>
              <Row>
                {searchResults.map((cocktail: CocktailType) =>
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
                )}
              </Row>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default SearchResults;

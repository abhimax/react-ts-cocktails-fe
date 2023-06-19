import { useState, ChangeEvent, FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Cocktail from "../../modules/Cocktail/Cocktail";
import useCocktailSearch from "../../hooks/use-cocktail-search";
import { CocktailType } from "../../modules/Cocktail/types/CocktailType";
import { Col, Row } from "react-grid-system";
import { Loader } from "../../components/Loader";
import SearchForm from "../../modules/SearchForm/SearchForm";

const SearchResults: FC = () => {
  const { searchResults, favorites } = useSelector(
    (state: RootState) => state.cocktails
  );
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const { searchTerm, setSearchTerm, isLoading, error, handleSearch } =
    useCocktailSearch();

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    handleSearch();
    setIsSearchClicked(true);
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

        {isLoading && (
          <Row>
            <Col>
              <Loader message="Search Cocktails..." />
            </Col>
          </Row>
        )}

        {error && isSearchClicked ? (
          <Row>
            <Col md={12}>
              <h2 className="sub-header">Search Results</h2>
            </Col>
            <Col md={12}>
              <p className="error-message">{error}</p>
            </Col>
          </Row>
        ) : (
          searchResults &&
          isSearchClicked &&
          searchResults.length > 0 && (
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
          )
        )}
      </Col>
    </Row>
  );
};

export default SearchResults;

import React from "react";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktails from "../hooks/use-cocktails";
import { Col, Row } from "react-grid-system";

const RandomItems: React.FC = () => {
  const { randomCocktails, isLoading, fetchCocktails } = useCocktails();

  const handleRefresh = () => {
    fetchCocktails();
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h2>Random Items</h2>
            <button onClick={handleRefresh}>Refresh</button>
          </Col>
        </Row>
        <Row>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            randomCocktails.map((cocktail) => (
              <Col key={cocktail.idDrink}>
                <Cocktail
                  key={cocktail.idDrink}
                  cocktail={cocktail}
                  showButtons={false}
                  isFavorite={false}
                />
              </Col>
            ))
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default RandomItems;

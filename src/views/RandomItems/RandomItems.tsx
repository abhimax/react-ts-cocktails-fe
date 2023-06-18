import React from "react";
import Cocktail from "../../modules/Cocktail/Cocktail";
import useCocktails from "../../hooks/use-cocktails";
import { Col, Row } from "react-grid-system";
import { Loader } from "../../components/Loader";
import { Button } from "../../components/Button";

const RandomItems: React.FC = () => {
  const { randomCocktails, isLoading, fetchCocktails } = useCocktails();

  const handleRefresh = () => {
    fetchCocktails();
  };

  return (
    <Row>
      <Col>
        <div className="random-item-header">
          <h2 className="sub-header">Random Items</h2>
          <Button label="Refresh" primary onClick={handleRefresh} />
        </div>
        <Row>
          {isLoading ? (
            <Col className="loader-wrapper">
              <Loader message="Loading 5 Random Cocktails..." />
            </Col>
          ) : (
            randomCocktails.map((cocktail) => (
              <Col xs={6} md={4} lg={3} xl={2} key={cocktail.idDrink}>
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

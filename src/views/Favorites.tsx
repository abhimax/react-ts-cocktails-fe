import React, { useEffect } from "react";
import Cocktail from "../modules/Cocktail/Cocktail";
import useCocktails from "../hooks/use-cocktails";
import { Col, Row } from "react-grid-system";

const Favorites: React.FC = () => {
  const { favorites, handleRemoveFromFavorites, handleSetFavorites } =
    useCocktails();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      handleSetFavorites(JSON.parse(storedFavorites));
    }
  }, [handleSetFavorites]);

  const handleRemove = (cocktailId: string) => {
    handleRemoveFromFavorites(cocktailId);
    const updatedFavorites = favorites.filter(
      (cocktail) => cocktail.idDrink !== cocktailId
    );
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <Row>
      <Col>
        <Row>
          <Col>
            <h2>Favorites</h2>
          </Col>
        </Row>
        <Row>
          {favorites.map((cocktail) => (
            <Col key={cocktail.idDrink}>
              <Cocktail
                key={cocktail.idDrink}
                cocktail={cocktail}
                showButtons={true}
                isFavorite={true}
                onRemoveFromFavorites={handleRemove}
              />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
};

export default Favorites;

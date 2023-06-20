import { FC, useEffect } from "react";
import Cocktail from "../../modules/Cocktail/Cocktail";
import useCocktails from "../../hooks/use-cocktails";
import { Col, Row } from "react-grid-system";

const Favorites: FC = () => {
  const { favorites, handleSetFavorites } = useCocktails();

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      handleSetFavorites(JSON.parse(storedFavorites));
    }
  }, [handleSetFavorites]);

  return (
    <Row className="favorites-view">
      <Col>
        <Row>
          <Col>
            <h2 className="sub-header">Favorites</h2>
          </Col>
        </Row>
        {favorites.length > 0 ? (
          <Row>
            {favorites.map((cocktail) => (
              <Col xs={6} md={4} lg={3} xl={2} key={cocktail.idDrink}>
                <Cocktail
                  key={cocktail.idDrink}
                  cocktail={cocktail}
                  showButtons={true}
                  isFavorite={true}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <p>No Favorite Cocktails have been selected.</p>
        )}
      </Col>
    </Row>
  );
};

export default Favorites;

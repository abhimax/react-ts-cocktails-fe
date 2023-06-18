import { FC } from "react";
import RandomItems from "./views/RandomItems";
import SearchResults from "./views/SearchResults";
import Favorites from "./views/Favorites";
import { Container, Row, Col } from "react-grid-system";

const Home: FC = () => {
  return (
    <Container>
      <Row>
        <Col className="app-header">
          <header>
            <h1 className="main-heading">The CocktailDB</h1>
          </header>
        </Col>
      </Row>
      <RandomItems />
      <SearchResults />
      <Favorites />
    </Container>
  );
};

export default Home;

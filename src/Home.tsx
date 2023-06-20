import { FC } from "react";
import RandomItems from "./views/RandomItems/RandomItems";
import SearchResults from "./views/SearchResults/SearchResults";
import Favorites from "./views/favorites/Favorites";
import { Container, Row, Col } from "react-grid-system";
import AppHeader from "./modules/AppHeader/AppHeader";

const Home: FC = () => {
  return (
    <Container>
      <AppHeader heading="The CocktailDB" />
      <RandomItems />
      <SearchResults />
      <Favorites />
    </Container>
  );
};

export default Home;

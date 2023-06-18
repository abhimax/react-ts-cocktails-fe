import RandomItems from "./views/RandomItems";
import SearchResults from "./views/SearchResults";
import Favorites from "./views/Favorites";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <RandomItems />
      <SearchResults />
      <Favorites />
    </div>
  );
};

export default Home;

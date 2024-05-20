import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import NotFound from "./views/NotFound";
import DetailPokemon from "./views/DetailPokemon";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/styles.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pokemones" element={<Pokemones />} />
        <Route path="/Pokemones/:name" element={<DetailPokemon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;

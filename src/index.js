import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import PokeCard from "./components/PokeCard";
import { mockPokemonData } from "./mock/pokeData";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App>
    <PokeCard pokemon={mockPokemonData} />
  </App>,
  rootElement
);

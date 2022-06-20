import React from "react";
import Header from "./components/Header/Header";
import Pokemons from "./components/Pokemons/Pokemons";
import Pokemons2 from "./components/Pokemons2/Pokemons2";
import RickAndMorty from "./components/RickAndMorty/RickAndMorty";
import AddProduct from "./components/AddProduct/AddProduct";
import Users from "./components/Users/Users";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    //указываем что роутинг будет в браузере
    <BrowserRouter>
      {/* неизменный header на всех наших страницах */}
      <Header />
      {/* для перечисления роутов */}
      <Routes>
        {/* список роутов */}
        <Route path="/" element={<h1>Homepage</h1>} />
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons2" element={<Pokemons2 />} />
        <Route path="/rick-and-morty" element={<RickAndMorty />} />
        <Route path="/users" element={<Users />} />
        <Route path="/add" element={<AddProduct />} />
      </Routes>
      {/* неизменный footer на всех наших страницах */}
      <h1>footer</h1>
    </BrowserRouter>
  );
};

export default App;

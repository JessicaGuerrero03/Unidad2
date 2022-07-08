import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AlumnInfo from './componente/alumnInfo';
import PokemonInfo from './componente/pokemonInfo';
import { Layout } from './componente/Layout';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactDOM.render( 
  <BrowserRouter > 
  <Routes > 
    <Route path = '/'element = { < Layout / > } >
    <Route path = 'pokemons'element = { <App / >}/>
    <Route path = 'pokemonInfo'element = { < PokemonInfo / > }/ > 
    <Route path = 'datos'
    element = { < AlumnInfo / > }/ > 
    <Route path = '*'element = { < Navigate replace to = '/' / > }/ > 
    </Route > 
    </Routes >
    </BrowserRouter > ,
    document.getElementById('root')
);
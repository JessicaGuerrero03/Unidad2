import { useEffect, useState } from 'react'
import React from 'react'
import PokemonThumb from './componente/pokemons.jsx'
import axios from 'axios'

const App = () => {
  
  const[allPokemons, setAllPokemons] = useState([])
  const [url, setUrl] = useState(' https://pokeapi.co/api/v2/pokemon?limit=20&offset=0')
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [disable, setDisable] = React.useState(true)

  const pokeFunc = async() => {
    const res = await axios.get(url);

    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getAllPokemons(res.data.results);
   

    console.log("PREV", res.data.previous);
    console.log("NEXT", res.data.next);

    if (res.data.previous != null) {
        setDisable(false);
    } else {
        setDisable(true);
    }
}

  const getAllPokemons = async () => {
    const res = await fetch(url)
    const data = await res.json()

    setUrl(data.next)

    function createPokemonObject(results)  {
      results.forEach( async pokemon => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data =  await res.json()
        setAllPokemons( currentList => [...currentList, data])
        await allPokemons.sort((a, b) => a.id - b.id)
      })
    }
    createPokemonObject(data.results)
  }

 useEffect(() => {
  pokeFunc()
 }, [url])

  return (
    <div className="app-contaner">
      <h1>Pokemon List</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map( (pokemonStats, index) => 
            <PokemonThumb
              key={index}
              id={pokemonStats.id}
              image={pokemonStats.sprites.other.dream_world.front_default}
              name={pokemonStats.name}
              type={pokemonStats.types[0].type.name}
            />)}
          
        </div>
        <div className="btn-div">
                    <button type="button" disabled={disable} className="button" onClick={()=> {
                        setAllPokemons([])
                        setUrl(prevUrl)
                    }}>Previous</button>&nbsp;&nbsp;
                    <button type="button" className="button" onClick={()=>{
                        setAllPokemons([])
                        setUrl(nextUrl)
                    }}>Next</button>&nbsp;&nbsp;
                </div>
      </div>
    </div>
  );
}

export default App;
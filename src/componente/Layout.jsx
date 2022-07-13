import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
     <main>
        <nav >
          <Link to='/pokemons'>Home</Link> | {""}
          <Link to='/pokemonInfo'>Pokemon</Link> | {""}
          <Link to='/datos'>180146</Link> | {""}
        </nav> 
        <section>
            <Outlet />
        </section>
      </main>
    );
    
}
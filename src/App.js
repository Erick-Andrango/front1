import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemons,setPokemons]= useState([]);
  const [loading,setLoading]= useState(true);

  const apiURL= 'https://pokeapi.co/api/v2/pokemon?limit=20';

  useEffect(()=>{
    const fechPokemons = async ()=>{
      try {
        const response = await fetch (apiURL);
        const data = await response.json();

        setPokemons(data.results);
      }catch(error){
        console.error('error al obtener la lista de pokemones:',error);
      }finally{
        setLoading(false);
      }
    };
    fechPokemons();
  },[]);

  return(
    <div style ={{margin: "1rem"}}>
     <h1>Lista de pokemones</h1>
     {loading ? (
      <p>Cargando ...</p>
      
     ):(
      <ul>{pokemons.map((pokemon,index)=>(
        <li key ={index}>{pokemon.name}</li>
      ))}</ul>
     )}
      </div>
  );
}

export default App;

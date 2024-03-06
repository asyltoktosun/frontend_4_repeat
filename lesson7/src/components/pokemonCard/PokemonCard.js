import React, { useEffect, useState } from "react";
import axios from 'axios';
import classes from './PokemonCard.module.css'
import { Link } from "react-router-dom";




const PokemonCard=({pokemon})=>{

    const [pokemonOne, setPokemonOne]=useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    console.log(pokemonOne, "d11111")

    const getPokemon= async ()=>{
        try {
          const {data}= await axios.get(pokemon.url)
          return data  
        }catch(error){
          setError(error.message)
        }finally{
            setIsLoading(false);
        }
      }

    useEffect(()=>{
        getPokemon().then(pokemon=>setPokemonOne(pokemon))
    },[])

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }
        return(
            <li className={classes.info}>
                {pokemon.name }
                {pokemonOne.sprites?.other?.dream_world?.front_default && (
                <img src={pokemonOne.sprites.other.dream_world.front_default} alt={pokemonOne.name} />)}
                <Link to={`/pokemon/${pokemonOne.id}`}>more</Link>
            </li>
        )
}

export default PokemonCard; 
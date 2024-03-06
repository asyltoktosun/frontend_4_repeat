import React, { useEffect, useState } from "react";
import axios from 'axios';
import PokemonCard from "../../components/pokemonCard/PokemonCard";




const PokemonPage=()=>{
    // const [pokemons, setPokemons]=useState([])

    // const getPokemons= async () =>{
    //     const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon')
    //     setPokemons(data.results)
    // }

    // useEffect(()=>{
    //     getPokemons()
    // },[])

    const [pokemonList , setPokemonList]=useState([])

    const getPokemonsList= async ()=>{
      try {
        const {data}= await axios.get('https://pokeapi.co/api/v2/pokemon/')
        return data.results
      }catch(e){
        console.log('error', e.message)
      }
    }
  
    useEffect(()=>{
      getPokemonsList().then((pokemonList)=>setPokemonList(pokemonList))
    },[])
  

    return(
        <ul>
            {
                pokemonList.map(pokemon=><PokemonCard pokemon={pokemon}/>)
            }
        </ul>
    )
}

export default PokemonPage;
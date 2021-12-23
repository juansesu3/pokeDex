import { Center, Input } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import Pokemon  from './Pokemon'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';



export default function AjaxHooks() {

    const [pokemons, setPokemons] = useState([]);
    const [busqueda, setBusqueda] = useState("")
  
    // useEffect(() => {

    //   const getPokemons = async (url) => {
    //     let res = await fetch(url),
    //       json = await res.json();
    //     //console.log(json);
  
    //     json.results.forEach(async (el) => {
    //       let res = await fetch(el.url),
    //         json = await res.json();
  
    //       console.log(json);
    //       let pokemon = {
    //         id: json.id,
    //         name: json.name,
    //         abilities: json.abilities[0].ability.name,
    //         order: json.order,
    //         types: json.types[0].type.name,
    //         species: json.species.name,
    //         avatar: json.sprites.front_default,
    //       };
  
    //       setPokemons((pokemons) => [...pokemons, pokemon]);
    //     });
    //   };
  
    //   getPokemons("https://pokeapi.co/api/v2/pokemon/");
    // }, []);

const peticionGet= async() => {
    await axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then(response=)

}

    const handleChange = (e) => { 
        setBusqueda(e.target.value);
        filtrar(e.target.value);

    }
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=pokemons.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        setPokemons(resultadosBusqueda)
    }
  
    return (
      <>
       < ChakraProvider >
       <center><h2>POKE-DEX</h2></center>
        
        <label></label>
        <Input 
        m='0px 470px ' 
        textAlign='center' 
        w='30%' 
        placeholder='Basic usage'
        value={busqueda}
        onChange={handleChange}
        />
        {pokemons.length === 0 ? (
          <h3>Cargando...</h3>
        ) : (
          pokemons.map((el) => (
            <Pokemon 

            key={el.id} 
            name={el.name}
            avatar={el.avatar} 
            order={el.order} 
            abilities={el.abilities} 
            types={el.types} 
            move1={el.moves} 
            move2={el.moves} 
            species={el.species}
            
            />
          ))
        )}
        </ChakraProvider>
      </>
    );
          }
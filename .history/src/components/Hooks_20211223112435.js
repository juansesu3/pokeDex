import { Center, Input } from '@chakra-ui/react';
import React, {useState, useEffect} from 'react';
import Pokemon  from './Pokemon'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logOutInitiate } from '../redux/action';



export default function AjaxHooks() {

    const [pokemons, setPokemons] = useState([]);
    const [busqueda, setBusqueda] = useState([])
    const [pokemonResults, setPokemonResults] = useState([])
  
    useEffect(() => {

      const getPokemons = async (url) => {
        let res = await fetch(url),
          json = await res.json();
        //console.log(json);
  
        json.results.forEach(async (el) => {
          let res = await fetch(el.url),
            json = await res.json();
            console.log(json);
  
          console.log(json);
          let pokemon = {
            id: json.id,
            name: json.name,
            abilities: json.abilities[0].ability.name,
            order: json.order,
            types: json.types[0].type.name,
            species: json.species.name,
            avatar: json.sprites.front_default,
          };
  
          setPokemons((pokemons) => [...pokemons, pokemon]);
        });
      };
  
      getPokemons("https://pokeapi.co/api/v2/pokemon/");
    }, []);


    // useEffect(() => {
    //   filtrar()
    
    // }, [busqueda])

    const handleChange = (e) => { 
        setBusqueda(e.target.value);
        filtrar(e.target.value);
        console.log(e.target.value);

    }
    const filtrar=(terminoBusqueda)=>{
        var resultadosBusqueda=pokemons.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
          
        })
        console.log(resultadosBusqueda);
        setPokemons(resultadosBusqueda)
       
        
    }
    const { user } = useSelector((state) => state.data)
    let dispatch = useDispatch()
  
      const handleAuth = () => {
          if (user) {
              dispatch(logOutInitiate());
          }
      };
  
    return (
      <>
      <cente></cente>r
       <div className='header-nav'>
                <Link to={`${user ? "/" : "/"}`} className='header-link'>
                    <div onClick={handleAuth} className='header-option'>
                        <span className='header-option1'>Hello {user ? user.email : "Guest: "}</span>
                        <span className='header-option2'> <strong>{user ? "Sign Out" : "Sign"}</strong> </span>

                    </div>
                </Link>
        </div>
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
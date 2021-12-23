import { Badge, Box, ChakraProvider, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const PokemonDetalle = ({ avatar, name, order, abilities, types}) => {
    console.log(name);



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
    return (
        <>
        <center>    
       
        < ChakraProvider >
        
        <Box mt='20px' maxW='sm' borderWidth='20px' borderRadius='5px' overflow='hidden'>
     
        <Image src={avatar} alt={name}  />
    
        <Box p='6' >
          <Box display='flex' alignItems='baseline' >
            <Badge borderRadius='full'  px='8' colorScheme='teal'>
            {name}
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              
            </Box>
          </Box>
    
          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
             {types}
          </Box>
    
          <Box>
            {""}
            <Box as='span' color='gray.600' fontSize='sm'>
              Habilidad: {abilities}
            </Box>
          </Box>
          <Box display='flex' mt='2' alignItems='center'>
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {""} Order: {order}
            </Box>
          </Box>
        </Box>
      </Box>
      
      </ChakraProvider>
      </center>
      </>
    )
}

export default PokemonDetalle

import React, { useState, useEffect } from "react";

import { ChakraProvider } from '@chakra-ui/react'
import { Badge, Box, Image } from '@chakra-ui/react'
import React from 'react'



function Pokemon ({ avatar, name, order, abilities,  types }) {



  return (
   
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
    <Image src={""} alt={""} />

    <Box p='6'>
      <Box display='flex' alignItems='baseline'>
        <Badge borderRadius='full' px='2' colorScheme='teal'>
          New
        </Badge>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='xs'
          textTransform='uppercase'
          ml='2'
        >
          {""} beds &bull; {""} baths
        </Box>
      </Box>

      <Box
        mt='1'
        fontWeight='semibold'
        as='h4'
        lineHeight='tight'
        isTruncated
      >
        {""}
      </Box>

      <Box>
        {""}
        <Box as='span' color='gray.600' fontSize='sm'>
          / wk
        </Box>
      </Box>

      <Box display='flex' mt='2' alignItems='center'>
        {/* {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              color={i < "" ? 'teal.500' : 'gray.300'}
            />
          ))} */}
        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
          {""} reviews
        </Box>
      </Box>
    </Box>
  </Box>
    
  

   





  );
}

export default Pokemon


{/* <figure>
<img src={avatar} alt={name} />
<figcaption>Nombre: {name}</figcaption>
<h3>Habilidad: {abilities}</h3>
<h3>Tipo: {types}</h3>
<p>Orden: {order}</p>

</figure> */}




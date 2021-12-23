import React, { useState, useEffect } from "react";

import { ChakraProvider } from '@chakra-ui/react'
import { Badge, Box, Image } from '@chakra-ui/react'

import { Link, Link as LinkRouter } from 'react-router-dom';




function Pokemon ({ avatar, name, order, abilities, types}) {



  return (<center>
    < ChakraProvider >
    <Box mt='20px' maxW='sm' borderWidth='20px' borderRadius='5px' overflow='hidden'>
   <Link></Link>
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
    
  
  {/* </Link> */}
  </ChakraProvider>
  </center>





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




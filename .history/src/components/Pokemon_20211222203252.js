import React, { useState, useEffect } from "react";

import { ChakraProvider } from '@chakra-ui/react'


function Pokemon ({ avatar, name, order, abilities,  types }) {



  return (
    <ChakraProvider>
    <Component />
  </ChakraProvider>
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>Nombre: {name}</figcaption>
      <h3>Habilidad: {abilities}</h3>
      <h3>Tipo: {types}</h3>
      <p>Orden: {order}</p>

    </figure>
  );
}

export default Pokemon




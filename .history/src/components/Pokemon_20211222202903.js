import React, { useState, useEffect } from "react";

function Pokemon ({ avatar, name, order, abilities,  types }) {
  return (
    <figure>
      <img src={avatar} alt={name} />
      <figcaption>Nombre: {name}</figcaption>
      <h3>Habilidad: {abilities}</h3>
      <h3>Tipo: {types}</h3>
      <p>Orden: {order}</p>

    </figure>
  );
}
export 



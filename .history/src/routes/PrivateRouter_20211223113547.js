import React from 'react';
import PokemonDetalle from '../components/PokemonDetalle'
import App

import { Routes, Route, Navigate } from "react-router";

const PrivateRouter = () => {
    return (
        <div>
            <Routes>
            <Route path="/home" element={<App/>}/>
                <Route path="/detalle" element={<PokemonDetalle/>}/>
            </Routes>
            
        </div>
    )
}

export default PrivateRouter

import React from 'react';

import { Routes, Route, Navigate } from "react-router";
import AppRouter from './AppRouter';

const PrivateRouter = () => {
    return (
        <div>
            <Routes>
            <Route path="/home" element={<AppRouter/>}/>
                <Route path="/detalle" element={<PokemonDetalle/>}/>
            </Routes>
            
        </div>
    )
}

export default PrivateRouter

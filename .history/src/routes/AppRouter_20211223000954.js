import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Detalle from '../components/PokemonDetalle'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="detalle/:id" element={<PokemonDetalle/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter
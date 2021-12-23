import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import PokemonDetalle from '../components/PokemonDetalle'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route path="/detalle" element={<PokemonDetalle/>}/>
            </Routes>
            
            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

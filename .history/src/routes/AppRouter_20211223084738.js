import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonDetalle from '../components/PokemonDetalle'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route path="/detalle" element={<PokemonDetalle/>}/>
                <Route path="/login" element={</>}/>
            </Routes>

            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

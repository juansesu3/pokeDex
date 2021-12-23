import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import PokemonDetalle from '../components/PokemonDetalle'
import App from './App';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Routes>
            <Route path="/" element={<App/>}/>
                <Route path="/detalle" element={<PokemonDetalle/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>

            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

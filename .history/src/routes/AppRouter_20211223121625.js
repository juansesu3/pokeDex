import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App';
import Login from '../components/Login'
import Pokemon from '../components/Pokemon';
import PokemonDetalle from '../components/PokemonDetalle';

import Register from '../components/Register';
import PrivateRouter from './PrivateRouter';
import PrivateRouterApp from './PrivateRouterApp';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login/>}/>  
                <Route path="/register" element={<Register/>}/>  
                <Route path="/home" element={<App/>}/>
                <Route path="/detalle/:name" element={<Pokemon/>}/>
            
          
     
            
              
                
            </Routes>

            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

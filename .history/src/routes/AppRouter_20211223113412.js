import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login'
import PokemonDetalle from '../components/PokemonDetalle'
import App from '../App';
import Register from '../components/Register';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Login/>}/>  
                <Route path="/register" element={<Register/>}/>  
                <Route
            path="home"
            element={
              <PrivateRouterApp>
                <PrivateRoutes />
              </PrivateRouter>
            }
          />
            
              
                
            </Routes>

            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

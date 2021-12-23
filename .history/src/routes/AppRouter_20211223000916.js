import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="detalle/:id" element={<Detalle/>}/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

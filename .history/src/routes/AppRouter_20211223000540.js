import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const AppRouter = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="detalle"/>
            </Routes>
            </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

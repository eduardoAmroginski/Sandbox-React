import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Page404 from './Pages/Page404'


const LinkExemple1 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default LinkExemple1

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Produto from './Pages/Produto'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Login from './Pages/Login'
import Page404 from './Pages/Page404'


const UseParamsExemple1 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/produto/:id" element={<Produto />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default UseParamsExemple1

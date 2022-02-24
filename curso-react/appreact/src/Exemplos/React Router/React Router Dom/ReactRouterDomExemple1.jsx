import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import Page404 from './Pages/Page404';
import Sobre from './Pages/Sobre';


const ReactRouterDomExemple1 = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} /> {/* Chama os elementos conforme a rota na url*/}
                <Route path="*" element={<Page404 />} /> {/* O asterisco serve para pegar qualquer um que não seja as rotas definidas (Geralmente usado para Erro 404)*/}
            </Routes>
        </BrowserRouter>
    )
}

export default ReactRouterDomExemple1

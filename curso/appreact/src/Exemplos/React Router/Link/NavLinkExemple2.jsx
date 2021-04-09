import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HeaderNavLink from './Components/HeaderNavLink/HeaderNavLink'
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Page404 from './Pages/Page404'


const NavLinkExemple2 = () => {
    return (
        <BrowserRouter>
            <HeaderNavLink />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavLinkExemple2

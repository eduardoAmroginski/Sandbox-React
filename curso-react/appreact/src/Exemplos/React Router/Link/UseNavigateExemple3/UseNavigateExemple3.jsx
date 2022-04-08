import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Page404 from '../Pages/Page404'
import Sobre from '../Pages/Sobre'
import Login from './Pages/Login'

import HeaderNavLink from '../Components/HeaderNavLink/HeaderNavLink'

const UseNavigateExemple3 = () => {
    return (
        <div>
            <BrowserRouter>
                <HeaderNavLink />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="sobre" element={<Sobre />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default UseNavigateExemple3

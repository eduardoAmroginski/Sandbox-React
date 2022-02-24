import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
    
    const location = useLocation();
    console.log(location)
    React.useEffect(() => {
        console.log('Mudou a rota para: ' + location.pathname)
    }, [location])

    return (
        <nav>
            <NavLink activeStyle={{color: 'tomato'}} to="/" end>Home</NavLink> {' | '} 
            <NavLink activeStyle={{color: 'tomato'}} to="sobre">Sobre</NavLink> {' | '} 
            <NavLink activeStyle={{color: 'tomato'}} to="login">Login</NavLink>
        </nav>
    )
}

export default Header


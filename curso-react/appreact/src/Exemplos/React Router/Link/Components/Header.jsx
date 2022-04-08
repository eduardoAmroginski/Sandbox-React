import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
            <Link to="/">Home</Link> | <Link to="sobre">Sobre</Link>
        </nav>
    )
}

export default Header


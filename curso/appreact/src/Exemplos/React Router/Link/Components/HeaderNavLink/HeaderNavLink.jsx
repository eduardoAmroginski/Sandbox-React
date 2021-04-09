import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Header.css"

const Header = () => {
    return (
        <nav>
            <NavLink to="/" end>Home</NavLink> | <NavLink to="sobre">Sobre</NavLink> | <NavLink to="login">Login</NavLink>
        </nav>
    )
}

export default Header

// Precisamos adicionar a propriedade "end" para evitar que o NavLink mantenha class="active"  no link da Home
// Assim facilitando a aplicação de um estilo para tornar mais visual o link que está ativo no momento.

//Podemos colocar a propriedade activeStyle={{ color: 'tomato' }} para definir o estilo que queremos quando o link
//estiver com a classe active. Assim não precisamos mais importar o CSS.
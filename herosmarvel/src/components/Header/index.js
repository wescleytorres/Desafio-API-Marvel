import React from 'react'
import Menu from '../Menu'

import './styles.css'

const Header = () => (
    <header id="main-header">

        <h1 className="titulo">HEROS MARVEL</h1>
        <img className="cidade-fundo" src={'/img/cidadefundo.png'}
        alt="cidade-fundo"/>

        <Menu />
    
    </header>
)

export default Header;
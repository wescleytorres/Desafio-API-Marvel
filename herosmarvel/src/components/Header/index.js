import React from 'react'

import './styles.css'

import cidadefundo from './cidadefundo.png'


const Header = () => (
    <header id="main-header">
        <h1>HEROS MARVEL</h1>
        <img className="cidade-fundo" src={cidadefundo} alt="cidade-fundo"/>
        <nav className="Menu"> </nav>
    </header>
)

export default Header;
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export default class Menu extends Component {
    state = {
        pesquisa: ''
    }

    handleSearch = (e) => {
        this.setState({ pesquisa: e.target.value })
    }

    render() {
        return (
            <nav className="Menu">
                <div className="areapesquisa">
                    <input className="pesquisa" type="text" placeholder="Search..."
                    value={this.state.pesquisa}
                    onChange={this.handleSearch} />
                <a className="btn_busca" href={`/busca/${this.state.pesquisa}`} type="text">
                    <img src={'/img/icon/busca.png'} alt="icon-busca"/>
                </a>
                </div>

                <div className="perfil">
                    <a href={'/perfil'}>VINGADOR MAIS FORTE</a>
                </div>
            </nav>
        )
    }
}
import React, { Component } from 'react';
import api from '../../services/api';
import { Link } from 'react-router-dom'

import './styles.css'

export default class Hero extends Component {
    state = {
        hero: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const resp = await api.get(`v1/public/characters/${id}`)
        this.setState({ hero: resp.data.data.results[0] })
    }

    render() {
        const { hero } = this.state;

        return (
            <div className="hero-info">
                    <img src={'/img/info-hero.jpg'} alt="info-hero" />
                <div className="page-hero">
                    <img className="img-hero2"
                    src={`${hero?.thumbnail?.path}.${hero?.thumbnail?.extension}`}
                    alt={hero.name}/>

                    <div className="data-hero">
                        <h1 className="name-hero2">{hero.name}</h1>
                        <p className="bio-hero">{hero.description}</p>
                    </div>
                </div>
                <div className="actions1">
                    <img className="pool-costas" src={'/img/pool-deitado-costas.png'}
                    alt="pool-deitado-costas" />
                    <Link to={'/'}><button>Voltar</button></Link>
                </div>
            </div>

        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

export default class Busca extends Component {
    state = {
        heros: []
    }

    async componentDidMount() {
        const { search } = this.props.match.params;

        const resp = await api.get(`v1/public/characters`, {
            params: {
                nameStartsWith: search
            }
        })
        this.setState({ heros: resp.data.data.results })
        console.log(resp)
    }


    render() {
        const { heros } = this.state;
        return (
            <div className="heros-list">

                <div className="list-cards">
                    {heros.map(heros => (
                        <div className="card-hero" key={heros.id}>
                            <Link to={`/hero/${heros.id}`}>
                                <img className="img-hero"
                                src={`${heros.thumbnail.path}.jpg`}
                                alt={heros.name}/>

                                <h2 className="name-hero">
                                    {heros.name}
                                </h2>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="actions2">
                    <img className="pool-frente" src={'/img/pool-deitado-frente.png'}
                    alt='pool-deitado-frente' />
                    <Link to={'/'}><button>Voltar</button></Link>
                </div>
            </div>
        )
    }
}
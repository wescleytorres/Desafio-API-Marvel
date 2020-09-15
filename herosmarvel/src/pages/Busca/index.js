import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

export default class Busca extends Component {
    state = {
        heros: []
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const resp = await api.get(`v1/public/characters`, {
            params: {
                nameStartsWith: id
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
            </div>
        )
    }
}
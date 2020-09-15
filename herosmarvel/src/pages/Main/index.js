import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'

import './styles.css'

export default class Main extends Component {
    state = {
        characters: [],
    };
    
    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async () => {
        const resp = await api.get('v1/public/characters', {
            params: {
              limit: 10,
            },
          })
          
          this.setState({ characters: resp.data.data.results })
          
        };
        

    render() {
        const { characters } = this.state;

        return  (
            <div className="heros-list">

                <div className="list-cards">
                    {characters.map(heros => (
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
                
                <div className="actions">
                    <div>
                        <img className="pool-costas" src={'/img/pool-deitado-costas.png'}
                        alt="pool-deitado-costas" />
                        <button>Anterior</button>
                    </div>
                    <div>
                        <img className="pool-frente" src={'/img/pool-deitado-frente.png'}
                        alt='pool-deitado-frente' />
                        <button>Próximo</button>
                    </div>
                </div>
            </div>
        )
    }
}

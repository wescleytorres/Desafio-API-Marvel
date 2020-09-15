import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css'

const VingadorMaisForte = () => (
    <div className="profile">
        <h1 className="vingador">VINGADOR MAIS FORTE</h1>
        <div className="redes">
            <div className="github">
                <img src="https://avatars1.githubusercontent.com/u/66565807?s=400&u=291e9623dfef725a3d14bf50d469222db2379e32&v=4"  alt="perfil-git"/>
                <a href="https://github.com/wescleytorres">Github</a>
            </div>
            <div className="linkedIn">
                <img src="https://media-exp1.licdn.com/dms/image/C5603AQFlOx1x4n7wXw/profile-displayphoto-shrink_200_200/0?e=1605744000&v=beta&t=dA_z1wG_czH5UIySJQaJdOfwoaYIpkffGT8dTN8B6u8" alt="perfil-Lkn"/>
                <a href="linkedin.com/in/wescley-torres-8ab029154">LinkedIn</a>
            </div>
        </div>
            <div className="entendi">
                <img  src={'/img/entendi.png'} alt="entendi" />
            </div>

        <div className="actions3">
            <img className="pool-sentado" src={'/img/pool-sentado.png'}
            alt='pool-deitado-frente' />
            <Link to={'/'}><button>Voltar</button></Link>
        </div>

    </div>

)

export default VingadorMaisForte;
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Hero from './pages/Hero'
import Busca from './pages/Busca'
import Perfil from './pages/Extra'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/hero/:id" component={Hero} />
            <Route path="/busca/:search" component={Busca} />
            <Route path="/perfil" component={Perfil} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
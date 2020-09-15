import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/Main'
import Hero from './pages/Hero'
import Busca from './pages/Busca'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/hero/:id" component={Hero} />
            <Route path="/busca/:search" component={Busca} />
        </Switch>
    </BrowserRouter>
)

export default Routes;
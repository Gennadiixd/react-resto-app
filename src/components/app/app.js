import React from 'react';
import { MainPage, CartPage } from '../pages';
import AppHeader from '../app-header';
import WithRestoService from '../hoc/'
import { Route, Switch } from 'react-router-dom';

import Background from './food-bg.jpg';

const App = ({ restoService }) => {
    restoService.getMenuItems()
        .then(data => console.log(data))

    return (
        <div style={{ background: `url(${Background}) center center/cover no-repeat` }} className="app">
            <AppHeader total={50} />
            <Switch>
                <Route path='/menu' component={MainPage} />
                <Route path='/cart' component={CartPage} />
            </Switch>
        </div>
    )
}

export default WithRestoService()(App);
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../../pages/auth/signin'
import Signup from '../../pages/auth/signup'
import Forgot from '../../pages/auth/forgotpass'

import Home from '../../pages/main/Home'
import Movie from '../../pages/main/MovieDetail'
import MovieAll from '../../pages/main/Movie'
import Order from '../../pages/main/Order'
import Payment from '../../pages/main/Payment'
import Profile from '../../pages/main/Profile'
import Admin from '../../pages/main/Admin';
import PageAdmin from '../../pages/main/PageAdmin';
import Tickets from '../../pages/main/Tickets'
import History from '../../pages/main/History'
import PrivateRoute from './module/PrivateRoute'

function MainRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/signin" component={Signin} />
                <Route path="/forgot-password" component={Forgot} />

                <Route path="/movies" component={MovieAll} />
                <Route path="/movie/:idMovie" component={Movie} />
                <Route path="/order" component={Order} />
                <Route path="/payment" component={Payment} />
                <Route path="/tickets" component={Tickets} />

                <Route path="/profile" component={Profile} />
                <Route path="/history" component={History} />
                <PrivateRoute path="/admin" component={Admin} />
                <PrivateRoute path="/pageadmin/:idMovie" component={PageAdmin} />

                <PrivateRoute exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute
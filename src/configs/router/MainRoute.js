import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Signin from '../../pages/auth/signin'
import Signup from '../../pages/auth/signup'
import Verification from '../../pages/auth/verification'
import Forgot from '../../pages/auth/forgotpass'
import NewPass from '../../pages/auth/newpass'

import Home from '../../pages/main/Home'
import Movie from '../../pages/main/MovieDetail'
import MovieAll from '../../pages/main/Movie'
import Order from '../../pages/main/Order'
import Payment from '../../pages/main/Payment'
import Profile from '../../pages/main/Profile'
import PageAdmin from '../../pages/main/PageAdmin';
import Tickets from '../../pages/main/Tickets'
import History from '../../pages/main/History'
import PrivateRoute from './module/PrivateRoute'
import PrivateRouteAdmin from './module/PrivateRouteAdmin'

function MainRoute() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/signup" component={Signup} />
                <Route path="/verification" component={Verification} />
                <Route path="/signin" component={Signin} />
                <Route path="/forgot-password" component={Forgot} />
                <Route path="/new-password/:email/:token" component={NewPass} />
                <Route path="/movie/:idMovie" component={Movie} />
                <Route path="/movies" component={MovieAll} />

                <PrivateRoute path="/order" component={Order} />
                <PrivateRoute path="/payment" component={Payment} />
                <PrivateRoute path="/tickets" component={Tickets} />

                <PrivateRoute path="/profile" component={Profile} />
                <PrivateRoute path="/history" component={History} />
                <PrivateRouteAdmin path="/admin/insert-movie" component={PageAdmin} />
                {/* <PrivateRouteAdmin path="/pageadmin/:idMovie" component={PageAdmin} /> */}

                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRoute
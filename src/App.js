import './App.css';
import Signin from './pages/auth/signin'
import Signup from './pages/auth/signup'

import Home from './pages/main/Home'
import Movie from './pages/main/MovieDetail'
import Order from './pages/main/Order'
import Payment from './pages/main/Payment'
import Profile from './pages/main/Profile'
import Admin from './pages/main/Admin';
import PageAdmin from './pages/main/PageAdmin';


import { BrowserRouter, Route, Switch } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/movie/:idMovie" component={Movie} />
        <Route path="/order" component={Order} />
        <Route path="/payment" component={Payment} />
        <Route path="/profile" component={Profile} />
        <Route path="/admin" component={Admin} />
        <Route path="/pageadmin/:idMovie" component={PageAdmin} />

        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
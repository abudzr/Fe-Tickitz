import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, CardTickets } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class Tickets extends Component {
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardTickets />
                <Footers />
            </Fragment>
        )
    }
}

export default Tickets
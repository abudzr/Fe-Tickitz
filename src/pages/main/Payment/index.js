import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, CardsPayment } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class Payment extends Component {
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardsPayment />
                <Footers />
            </Fragment>
        )
    }
}

export default Payment
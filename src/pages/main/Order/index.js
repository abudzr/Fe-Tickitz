import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, HeaderOrder, CardsOrder } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './order.module.css'



class Order extends Component {

    render() {
        return (
            <Fragment>
                <NavigationUser />
                <HeaderOrder />
                <CardsOrder
                />
                <Footers />
            </Fragment>
        )
    }
}

export default Order
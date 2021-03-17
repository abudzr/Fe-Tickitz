import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, HeaderOrder, CardsOrder } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './order.module.css'



class Order extends Component {
    handleChange = () => {
        this.props.history.push('/')
    }
    handlePayment = () => {
        this.props.history.push('/payment')
    }
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <HeaderOrder />
                <CardsOrder
                    Change={this.handleChange}
                    Payment={this.handlePayment}
                />
                <Footers />
            </Fragment>
        )
    }
}

export default Order
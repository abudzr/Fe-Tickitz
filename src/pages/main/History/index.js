import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, CardsHistory } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class History extends Component {
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardsHistory />
                <Footers />
            </Fragment>
        )
    }
}

export default History
import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers } from '../../../components'
import CardProfile from '../../../components/CardProfile'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class Payment extends Component {
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardProfile />
                <Footers />
            </Fragment>
        )
    }
}

export default Payment
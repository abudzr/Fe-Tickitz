import React, { useEffect, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, HeaderOrder, CardsOrder } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './order.module.css'



function Order() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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

export default Order
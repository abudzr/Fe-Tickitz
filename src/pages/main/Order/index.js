import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, Footers, HeaderOrder, CardsOrder } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './order.module.css'



class Order extends Component {
    // constructor() {
    //     super()

    //     this.state = {
    //         films: [],
    //         isLoading: false
    //     }
    // }


    // componentDidMount() {
    //     this.setState({
    //         isLoading: true
    //     })
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((res) => {
    //             this.setState({
    //                 films: res.data,
    //                 isLoading: false
    //             })
    //         })
    //         .catch(() => {
    //             alert('server bermasalah')
    //             this.setState({
    //                 isLoading: false
    //             })
    //         })
    // }
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <HeaderOrder />
                <CardsOrder />
                <Footers />
            </Fragment>
        )
    }
}

export default Order
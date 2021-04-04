import React, { Component, Fragment } from 'react'
import axios from 'axios'
import jwtDecode from "jwt-decode";
import { NavigationUser, Footers, CardsHistory } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class History extends Component {
    state = {
        image: ''
    }
    getPostAPI = () => {
        const token = localStorage.getItem('token')
        const decoded = jwtDecode(token);
        const url = `${process.env.REACT_APP_API_RESTAPI}users/${decoded.idUsers}`
        axios.get(url)
            .then((res) => {
                this.setState({
                    firstName: res.data.data[0].firstName,
                    lastName: res.data.data[0].lastName,
                    image: res.data.data[0].image
                })
            })

    }
    componentDidMount() {
        this.getPostAPI();
    }
    render() {
        return (
            <Fragment>
                <NavigationUser />
                <CardsHistory
                    image={this.state.image}
                    name={`${this.state.firstName} ${this.state.lastName}`}
                />
                <Footers />
            </Fragment>
        )
    }
}

export default History
import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { NavigationUser, HeaderMovie, Footers, Showtimes, Schedule, } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './movie.module.css'



class Movie extends Component {
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
                <HeaderMovie />
                <Showtimes />
                <Schedule />
                <Footers />
            </Fragment>
        )
    }
}

export default Movie
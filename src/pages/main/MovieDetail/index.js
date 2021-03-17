import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { NavigationUser, HeaderMovie, Footers, Showtimes, Schedule, } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './movie.module.css'



class Movie extends Component {
    state = {
        data: []
    }



    getPostAPI = () => {
        // const url = process.env.REACT_APP_API_MOVIEID;
        const url = 'http://localhost:8000/movies/'
        // console.log(url);
        // console.log(this.props.match.params.idMovie);
        axios.get(`${url}${this.props.match.params.idMovie}`)
            .then((res) => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data
                })
                console.log(res);
            })
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        console.log(this.props);
        return (
            <Fragment>
                <NavigationUser />

                {this.state.data.map(data => {
                    return (
                        <HeaderMovie
                            data={data}
                        />
                    )
                })
                }


                <Showtimes />
                <Schedule />
                <Footers />
            </Fragment>
        )
    }
}

export default Movie
import React, { Component, Fragment } from 'react'
import axios from 'axios'
import { NavigationUser, PageAdmin, Footers } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './payment.module.css'



class Payment extends Component {
    state = {
        data: [],
        idMovie: '',
        movieName: '',
        directedBy: '',
        duration: '',
        casts: '',
        synopsis: '',
        genre: ''


    }

    getPostAPI = () => {
        const url = 'http://localhost:8000/movies/'
        // console.log(this.props.match.params.idMovie);
        // const url = process.env.REACT_APP_API_MOVIEID;
        axios.get(`${url}${this.props.match.params.idMovie}`)
            .then((res) => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data[0],
                    movieName: res.data.data[0].movieName,
                    directedBy: res.data.data[0].directedBy,
                    duration: res.data.data[0].duration,
                    casts: res.data.data[0].casts,
                    synopsis: res.data.data[0].synopsis,
                    genre: res.data.data[0].genre
                })
                console.log(res);
            })

    }

    handleUpdate = () => {
        const url = 'http://localhost:8000/movies/'
        // console.log(this.props.match.params.idMovie);
        axios.put(`${url}${this.props.match.params.idMovie}`, {
            idMovie: this.props.match.params.idMovie,
            movieName: this.state.movieName,
            directedBy: this.state.directedBy,
            duration: this.state.duration,
            casts: this.state.casts,
            synopsis: this.state.synopsis,
            genre: this.state.genre
        })
            .then((res) => {
                this.getPostAPI()
                console.log(res);
            })
    }


    handleChange = (e) => {
        const target = e.target
        const value = target.value
        const name = target.name
        console.log(name)
        this.setState({
            [name]: value
        })
    }

    componentDidMount() {
        this.getPostAPI();
    }

    render() {
        // console.log(this.state.movieName);
        return (
            <Fragment>
                <NavigationUser />

                <PageAdmin
                    image={this.state.data.image}
                    movie={this.state.movieName}
                    directed={this.state.directedBy}
                    durations={this.state.duration}
                    release={this.state.data.releaseDate}
                    cast={this.state.casts}
                    synopsi={this.state.synopsis}
                    genremovie={this.state.genre}
                    update={this.handleUpdate}
                    change={this.handleChange}
                />)


                <Footers />
            </Fragment>
        )
    }


}

export default Payment
import React, { Component, Fragment } from 'react'
import { Footers, NavigationUser, SearchMovie } from '../../../components'
import { Container } from 'react-bootstrap';
import style from './home.module.css'
import axios from 'axios'
import Button from '../../../components/Button'
import Search from '../../../components/SearchMovie';


class Movie extends Component {
    state = {
        data: [],
        movieName: '',
        show: true
    }

    getPostAPI = () => {
        const token = localStorage.getItem('token')
        const url = process.env.REACT_APP_API_MOVIE;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data
                })
            })
    }


    handleDetail = (data) => {
        this.props.history.push(`/movie/${data}`)
    }

    handleChange = (e) => {
        this.setState({
            movieName: e.target.name = e.target.value
        })
        console.log(e.target.value);

        const token = localStorage.getItem('token')
        const url = `${process.env.REACT_APP_API_MOVIEID}/search/film?name=${e.target.value}`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                console.log(res.data.data);
                this.setState({
                    data: res.data.data
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
                <div className={style.container}>

                    {/*Search Input*/}
                    <label className={style['search-label']} htmlFor="search-input">
                        <input
                            type="text"
                            value={this.movieName}
                            name="movieName"
                            id="search-input"
                            placeholder="Search..."
                            onChange={this.handleChange}
                        />
                        <i className="fa fa-search search-icon" />
                    </label>

                </div>
                <Container className={style['up-coming']}>

                    <div className="row mt-4 pb-4 pt-2" id={style.card} >
                        {this.state.data.map(data => {
                            return (
                                <div className="col-6 col-lg-3" key={data.idMovie}>
                                    <SearchMovie
                                        data={data}
                                        detail={this.handleDetail}
                                    />
                                </div>
                            )
                        })
                        }
                    </div>
                </Container>



                <Footers />
            </Fragment>
        )
    }
}

export default Movie
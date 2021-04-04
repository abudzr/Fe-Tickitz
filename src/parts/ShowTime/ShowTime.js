import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import style from './nowShow.module.css'
import { Container } from 'react-bootstrap';
import axios from 'axios'
// import http from '../../helper/http'
import CardsNowShow from '../../components/CardsNowShow'
import { withRouter } from "react-router-dom";



class ShowTimePart extends Component {
    state = {
        nowShowingList: []
    };
    componentDidMount() {
        const token = localStorage.getItem('token')
        const url = `${process.env.REACT_APP_API_RESTAPI}movies/nowShowing?order=DESC&limit=5`;
        axios.get(url, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
            .then((res) => {
                this.setState({
                    nowShowingList: res.data.data
                })
            })
    }

    handleDetail = (data) => {
        console.log(data);
        this.props.history.push(`/movie/${data}`)
    }
    render() {
        return (
            <Fragment>
                <Container className={style['now-showing']}>


                </Container>
            </Fragment>
        )
    }
}


export default withRouter(ShowTimePart)



import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import { NavigationUser, HeaderMovie, Footers, Showtimes, } from '../../../components'
// import { Container } from 'react-bootstrap';
// import style from './movie.module.css'



function Movie({ match }) {
    const [data, setData] = useState([])

    useEffect(() => {
        const url = process.env.REACT_APP_API_RESTAPI;
        axios.get(`${url}movies/${match.params.idMovie}`)
            .then((res) => {
                setData(res.data.data)

            })
    }, [match])
    return (
        <Fragment>
            <NavigationUser />

            {data.map(data => {
                return (
                    <HeaderMovie
                        data={data}
                    />
                )
            })
            }

            <Showtimes
                match={match}
            />
            {/* <Schedule /> */}
            <Footers />
        </Fragment>
    )
}

export default Movie
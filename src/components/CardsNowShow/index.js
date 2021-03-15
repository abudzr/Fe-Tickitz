import React, { Component, Fragment } from 'react'
// import { Link } from 'react-router-dom'
import style from './card.module.css'
import { Card } from 'react-bootstrap';
import axios from 'axios'

class CardsNowShow extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const url = process.env.REACT_APP_API_MOVIE;

        axios.get(url)
            .then((res) => {
                // console.log(res.data.data);
                this.setState({
                    data: res.data.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <div class="row flex-nowrap mt-4 pb-4 pt-2" id={style['scrolling-nowShowing']}>
                    {this.state.data.map(data => {
                        return (
                            <div class="col-7 col-lg-3">
                                <Card className={style['card-now-showing']}>
                                    <Card.Img className={style['card-img']} key={data.idMovie} src={data.image} alt="imgNowshowing" />
                                </Card>
                            </div>
                        )
                    })
                    }
                </div>
            </Fragment>
        )
    }
}


export default CardsNowShow
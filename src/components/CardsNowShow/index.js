import React, { Fragment } from 'react'
import style from './card.module.css'
import { Card } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";

const CardsNowShow = (props) => {
    return (
        <Fragment>
            <div>
                <Card className={style['card-now-showing']} >
                    <Card.Img className={style['card-img']} src={`${process.env.REACT_APP_API_RESTAPI}${props.data.image}`} />
                    <Card.Body>
                        <div className={style['title-movies']}>
                            <h1>{props.data.movieName}</h1>
                            <p>{props.data.genre}</p>
                        </div>
                        <div className={style['button-movies']}>

                            <Button title="Detail" type="submit" btn="btn-card" color="white" onClick={() => props.detail(props.data.id)} />
                        </div>
                    </Card.Body>
                </Card>
            </div>

        </Fragment >
    )
}


export default withRouter(CardsNowShow);
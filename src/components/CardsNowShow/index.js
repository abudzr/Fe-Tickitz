import React, { Component, Fragment } from 'react'
import style from './card.module.css'
import { Card } from 'react-bootstrap';

class CardsNowShow extends Component {
    render() {
        return (
            <Fragment>
                <Card className={style['card-now-showing']} >
                    <Card.Img className={style['card-img']} src={this.props.img} alt="imgNowshowing" />
                </Card>
            </Fragment>
        )
    }
}


export default CardsNowShow
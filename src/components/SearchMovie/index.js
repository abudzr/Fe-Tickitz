import style from './search.module.css'
import React, { Fragment } from 'react'
import { withRouter } from "react-router-dom";
import { Card } from 'react-bootstrap';
import Button from '../Button'


const Search = (props) => {
    return (
        <Fragment>

            <div>
                <Card className={style.card} >
                    <Card.Img className={style['card-img']} src={props.data.image} />
                    <Card.Body>
                        <Card.Title className={style['card-title']}>{props.data.movieName}</Card.Title>
                        <Card.Text className={style['card-text']}>{props.data.genre}
                        </Card.Text>
                        <Button title="Detail" type="submit" btn="btn-cards" color="white" onClick={() => props.detail(props.data.id)} />
                    </Card.Body>
                </Card>
            </div>
        </Fragment >
    )
}


export default withRouter(Search);








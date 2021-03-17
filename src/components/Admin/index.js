import React, { Fragment } from 'react'
import { withRouter } from "react-router-dom";
import style from './card.module.css'
import { Card } from 'react-bootstrap';
import Button from '../Button'


const Admin = (props) => {
    return (
        <Fragment>
            <div>
                <Card className={style.card} >
                    <Card.Img className={style['card-img']} src={props.data.image} />
                    <Card.Body>
                        <Card.Title className={style['card-title']}>{props.data.movieName}</Card.Title>
                        <Card.Text className={style['card-text']}>{props.data.genre}
                        </Card.Text>
                        <Button title="Update" type="submit" btn="btn-update" color="yellow" onClick={() => props.update(props.data.idMovie)} />
                        <Button title="Delete" type="submit" btn="btn-delete" color="red" onClick={() => props.delete(props.data.idMovie)} />
                    </Card.Body>
                </Card>
            </div>
        </Fragment >
    )
}


export default withRouter(Admin);
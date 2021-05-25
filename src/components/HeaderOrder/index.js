import React from 'react'
import style from './headerorder.module.css'
import { Jumbotron, Container } from 'react-bootstrap';
import Button from '../Button'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";


function HeaderOrder() {
    const history = useHistory();
    const { order } = useSelector((state) => state.order);
    const handleChangeMovie = () => {
        history.push("/")
    }
    return (
        <Jumbotron className={style['change-movie']}>
            <Container>
                <div class="row">
                    <div class="col-lg-6">
                        <p class={style['text-change-movie']}>{order.movie[0].movieName}</p>
                    </div>
                    <div class="col-lg-6">
                        <Button title="Change Movie" btn="btn-change-movie" color="whitesmoke" onClick={handleChangeMovie} />
                    </div>
                </div>
            </Container>
        </Jumbotron>
    )
}


export default HeaderOrder
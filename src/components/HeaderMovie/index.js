import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import style from './headermovie.module.css'
import { Jumbotron, Container, Card } from 'react-bootstrap';
// import axios from 'axios'
import moment from 'moment'
import Moment from 'react-moment';

const HeaderMovie = (props) => {

    return (
        <Jumbotron className={style.jumbotron}>
            <Container>
                <div class="row">
                    <div class="col-lg-4 col-sm-8">
                        <Card className={style['card-jumbotron']}>
                            <Container>
                                <Card.Img className={style['card-img-jumbotron']} src={props.data.image} />

                            </Container>
                        </Card>
                    </div>
                    <div class="col-lg-8 col-sm-4">
                        {/* data ini next ngambil dari database */}

                        <h2 class={style["title-jumbotron"]}>{props.data.movieName}</h2>
                        <p class={style["sub-title-jumbotron"]}>{props.data.genre}</p>
                        <div class={style["detail-jumbotron"]}>
                            <div class={style["sub-detail-jumbotron"]}>
                                <p class={style["sub-title-title"]}>Release date</p>
                                <Moment format='MMMM Do YYYY' class={style["sub-title-sub-title"]}><p>{props.data.releaseDate}</p></Moment>

                                <p class={style["sub-title-title"]}>Duration</p>
                                <p class={style["sub-title-sub-title"]}>{props.data.duration}</p>
                            </div>
                            <div class={style["sub-detail-jumbotron"]}>
                                <p class={style["sub-title-title"]}>Directed by</p>
                                <p class={style["sub-title-sub-title"]}>{props.data.directedBy}</p>
                                <p class={style["sub-title-title"]}>Casts</p>
                                <p class={style["sub-title-sub-title"]}>{props.data.casts}</p>
                            </div>
                        </div>
                        <hr />
                        {/* style="border: 1px solid #DEDEDE;" */}
                        <p p class={style["sub-title-title-title"]} > Synopsis</p>
                        <p class={style["sub-title-sub-title"]}>{props.data.synopsis} </p>
                    </div>
                </div>
            </Container>
        </Jumbotron >
    )
}


export default HeaderMovie
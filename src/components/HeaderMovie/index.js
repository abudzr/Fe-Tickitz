import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import style from './headermovie.module.css'
import { Jumbotron, Container, Card } from 'react-bootstrap';
import axios from 'axios'


class HeaderMovie extends Component {
    state = {
        data: []
    }
    componentDidMount() {
        const url = process.env.REACT_APP_API_MOVIE;
        // console.log(url);
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
            <Jumbotron className={style.jumbotron}>
                <Container>
                    <div class="row">
                        <div class="col-lg-4 col-sm-8">
                            <Card className={style['card-jumbotron']}>
                                <Container>
                                    <Card.Img className={style['card-img-jumbotron']} src="https://bookingtickitz.netlify.app/assets/img/spider1.png" />

                                </Container>
                            </Card>
                        </div>
                        <div class="col-lg-8 col-sm-4">
                            {/* data ini next ngambil dari database */}

                            <h2 class={style["title-jumbotron"]}>Spider-Man: Homecoming</h2>
                            <p class={style["sub-title-jumbotron"]}>Adventure, Action, Sci-Fi</p>
                            <div class={style["detail-jumbotron"]}>
                                <div class={style["sub-detail-jumbotron"]}>
                                    <p class={style["sub-title-title"]}>Release date</p>
                                    <p class={style["sub-title-sub-title"]}>June 28, 2017</p>
                                    <p class={style["sub-title-title"]}>Duration</p>
                                    <p class={style["sub-title-sub-title"]}>2 hours 13 minutes </p>
                                </div>
                                <div class={style["sub-detail-jumbotron"]}>
                                    <p class={style["sub-title-title"]}>Directed by</p>
                                    <p class={style["sub-title-sub-title"]}>Jon Watss</p>
                                    <p class={style["sub-title-title"]}>Casts</p>
                                    <p class={style["sub-title-sub-title"]}>Tom Holland, Michael Keaton, Robert Downey Jr., ...</p>
                                </div>
                            </div>
                            <hr />
                            {/* style="border: 1px solid #DEDEDE;" */}
                            <p p class={style["sub-title-title-title"]} > Synopsis</p>
                            <p class={style["sub-title-sub-title"]}>Thrilled by his experience with the Avengers,
                            Peter returns home, where he lives with his Aunt
                            May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his
                            normal daily routine - distracted by thoughts of proving himself to be more than just your
                            friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything
                                that Peter holds most important will be threatened. </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron >
        )
    }
}


export default HeaderMovie
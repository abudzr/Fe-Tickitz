import React from 'react'
import style from './schedule.module.css'
import { withRouter } from "react-router-dom";
import { Jumbotron, Container } from 'react-bootstrap';
import Button from '../Button'
// import { connect } from 'react-redux'
// import { order } from '../../configs/redux/action/order'

// const { REACT_APP_API_RESTAPI: URL } = process.env

const Schedule = (props) => {
    // state = {
    //     time: ''
    // };

    // changeTime = (e) => {
    //     setState({ [e.target.name]: e.target.value })
    // }
    const handleBook = () => {
        props.history.push('/order')
    };


    return (
        <Jumbotron className={style.schedule}>
            <Container>
                <div class="row">
                    <div class={style['card-schedule']}>
                        <div class={style['title-schedule']}>
                            <div class={style['title-img']}>
                                <img class={style['card-img-schedule']} src="https://bookingtickitz.netlify.app/assets/img/cardSchedule.png" alt="schedule" />
                            </div>
                            <div class={style['sub-title-schedule']}>
                                <p class={style.title}>ebv.id</p>
                                <p class={style['sub-title']}>Whatever street No.12, South Purwokerto</p>
                            </div>
                        </div>
                        <hr className={style['line-hr']}></hr>
                        <div class={style['detail-date']}>
                            <div class={style['sub-detail-date']}>
                                <p class={style['title-date']} >08:30am</p>
                                {/* style='color: #4E4B66;' */}
                                <p class={style['title-date']} >04:30pm</p>
                                {/* style='color: #6E7191;' */}
                            </div>
                            <div class={style['sub-detail-date']}>
                                <p class={style['title-date']} >10:30pm</p>
                                {/* style='color: #6E7191;' */}
                                <p class={style['title-date']} >07:00pm</p>
                                {/* style='color: #A0A3BD;' */}
                            </div>
                            <div class={style['sub-detail-date']}>
                                <p class={style['title-date']} >12:00pm</p>
                                {/* style='color: #A0A3BD;' */}
                                <p class={style['title-date']}>08:30pm</p>
                                {/* style='color: #6E7191;' */}
                            </div>
                            <div class={style['sub-detail-date']}>
                                <p class={style['title-date']} >02:00pm</p>
                                {/* style='color: #6E7191;' */}
                            </div>
                        </div>
                        <div class={style['detail-price']}>
                            <div class={style['sub-detail-price']}>
                                <p class={style['text-price']}>Price</p>
                            </div>
                            <div class={style['sub-detail-price']}>
                                <p class={style['text-price1']}>$10.00/seat</p>
                            </div>
                        </div>
                        <div class={style['detail-booking']}>
                            <Button title="Book Now" btn="btn-schedule" color="purple" onClick={handleBook} />
                            <p class={style['text-booking']}>Add to cart</p>
                        </div>
                    </div>

                </div>
                <div class={style['line-schedule']}>
                    <hr></hr>
                    <a className={style['text-schedule']} href="/" >View More</a>
                    <hr></hr>
                </div>
            </Container>
        </Jumbotron>
    )
}


export default withRouter(Schedule);
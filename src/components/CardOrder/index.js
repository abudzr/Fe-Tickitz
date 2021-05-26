import React, { Fragment, useState } from 'react'
import { withRouter } from "react-router-dom";
import style from './card.module.css'
import Button from '../Button'
import { useSelector, useDispatch } from "react-redux";
import Moment from 'react-moment';
import SeatDesktop from '../SeatDesktop';
import SeatMobile from '../SeatMobile';
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

const CardsOrder = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [seat, setSeat] = useState(null);
    const { order } = useSelector((state) => state.order);
    // console.log(order.movie[0]);
    const [disabled, setDisabled] = useState(false)
    const handleChange = () => {
        history.push('/')
    }
    const handlePayment = () => {
        if (seat) {
            setDisabled(true)
            if (seat.length >= 1) {
                setDisabled(false)
                dispatch({
                    type: "ADD_ORDER", payload: {
                        ...order,
                        seat: seat
                    }
                })
                history.push('/payment')
            } else {
                Swal.fire("Info", "please select your seat", "info")
            }
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div className={style['choose-seat']}>
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <p class={style['text-title-order']}>Choose Your Seat</p>
                            <SeatDesktop
                                changeSeat={setSeat}
                            />
                            <SeatMobile changeSeat={setSeat} />

                        </div>
                        <div class="card-order-info col-6 col-lg-4">
                            <p class={style['text-title-order1']}>Order Info</p>
                            <div class={style['card-choose-seat1']}>
                                <img class={style['card-img-order']} src={`${process.env.REACT_APP_API_RESTAPI}${order.cinema.image}`} alt="seat" />
                                <p class={style['title-pay']}>{order.cinema.name}</p>
                                <div class={style['order-info']}>
                                    <div class={style['sub-order-info']}>
                                        <p class={style['title-order']}>Movie selected</p>
                                        <Moment format="dddd, D MMMM YYYY" class={style["title-order"]}>
                                            {order.showtime.date}
                                        </Moment>
                                        {/* <p class={style['title-order']}>Tuesday, 07 July 2020</p> */}
                                        <p class={style['title-order']}>One ticket price</p>
                                        <p class={style['title-order']}>Seat choosed</p>
                                    </div>
                                    <div class={style['sub-order-info']}>
                                        <p class={style['sub-title-order']}>{order.movie[0].movieName}</p>
                                        <p class={style['sub-title-order']}>{order.showtime.time}</p>
                                        <p class={style['sub-title-order']}>IDR{order.cinema.price}</p>
                                        {seat && <p className={style['sub-title-order']}>{seat.join(", ")}</p>}
                                        {/* <p class={style['sub-title-order']}>C4, C5, C6</p> */}
                                    </div>
                                </div>
                                <hr></hr>
                                <div class={style.pay}>
                                    <p class={style['title-pay-order']}>Total Payment</p>
                                    {seat && <p className={style['sub-title-pay']}>IDR {seat.length * order.cinema.price}</p>}
                                    {/* <p class={style['sub-title-pay']}>IDR{order.cinema.price * 3}</p> */}
                                </div>
                            </div>
                            {/* <SeatMobile /> */}
                            {/* <!-- ini untuk mobile version --> */}
                            {/* <div class={style['card-choose-seat2']}>
                                <div class="row flex-nowrap" id={style['card-choose-seat3']}>
                                    <p class={style['title-seat']}>Choosed</p>
                                    <p class={style.seat}>C4, C5, C6</p>
                                </div>
                                <div class={style['card-choose-seat4']}>
                                    <Dropdown className={style['position-schedule']} >
                                        <Dropdown.Toggle className={style['schedule']} id="dropdown-basic">
                                            C
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">A</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">B</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">C</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown >
                                        <Dropdown.Toggle className={style['schedule']} id="dropdown-basic">
                                            4
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div class={style['card-choose-seat4']}>
                                    <Dropdown className={style['position-schedule']} >
                                        <Dropdown.Toggle className={style['schedule']} id="dropdown-basic">
                                            C
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">A</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">B</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">C</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown >
                                        <Dropdown.Toggle className={style['schedule']} id="dropdown-basic">
                                            4
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div class={style['card-choose-seat4']}>
                                    <Dropdown className={style['position-schedule']} >
                                        <Dropdown.Toggle className={style['schedule']} id="dropdown-basic">
                                            C
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">A</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">B</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">C</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown >
                                        <Dropdown.Toggle className={style['schedule']} id="dropdown-basic">
                                            4
                                            </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div> */}
                            {/* <!-- isi konten --> */}
                        </div>
                        {/* <Button title="Add new seat" btn="btn-add-new-seat" color="white" onClick={props.Add} /> */}
                        <Button title="Change your movie" btn="btn-change-order" color="white" onClick={handleChange} />
                        <Button title="Checkout now" disabled={disabled} btn="btn-checkout" color="purple" onClick={handlePayment} />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}


export default withRouter(CardsOrder);
import React, { Fragment, useEffect } from 'react'
import style from './card.module.css'
import { Card } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createTransaction } from '../../configs/redux/action/showtimes'
import { useHistory } from "react-router-dom";
import Moment from 'react-moment';
import google_pay from '../../assets/img/google_pay.png'
import logo_visa from '../../assets/img/logo_visa.png'
import GoPay from '../../assets/img/GoPay.png'
import logos_paypal from '../../assets/img/logos_paypal.png'
import LogoDANA from '../../assets/img/LogoDANA.png'
import Bank_BCA from '../../assets/img/Bank_BCA.png'
import Bank_BRI from '../../assets/img/Bank_BRI.png'
import ovo from '../../assets/img/ovo.png'
import Swal from 'sweetalert2'


function CardsPayment() {
    const history = useHistory();
    const dispatch = useDispatch();
    const { order } = useSelector((state) => state.order);
    console.log(order.length);
    const handleBack = () => {
        history.push('/order')
    }
    const handleNext = () => {
        dispatch(createTransaction({
            idMovie: order.movie[0].id,
            idCinemas: order.cinema.idCinemas,
            idShowtime: order.showtime.id,
            seat: order.seat
        }))
            .then((res) => {
                Swal.fire({
                    title: "Success!",
                    text: res.message,
                    icon: "success",
                    confirmButtonText: "Ok",
                    confirmButtonColor: "#ffba33",
                }).then((result) => {
                    dispatch({
                        type: "ADD_ORDER", payload: {
                            ...order
                        }
                    })
                    if (result.isConfirmed) {
                        history.push('/tickets')
                    } else {
                        history.push('/tickets')
                    }
                })
            })
    }
    const handlePayment = () => {

    }
    // useEffect(() => {
    //     if (order) {
    //         if (order.length < 1) {
    //             history.push('/')
    //         }
    //     }
    // }, [])

    return (
        <Fragment>
            <div className={style['payment-info']}>
                <div className="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <p class={style['text-title-info-1']}>Payment Info</p>
                            <Card className={style['card-choose-info']}>
                                <Card.Body className={style['card-text']}>
                                    <Card.Text>
                                        <p class={style['title-order-info']}>Date & time</p>
                                        <hr className="my-3" />
                                        <p class={style['title-order-info']}>Movie title</p>
                                        <hr className="my-3" />
                                        <p class={style['title-order-info']}>Cinema name</p>
                                        <hr className="my-3" />
                                        <p class={style['title-order-info']}>Number of tickets</p>
                                        <hr className="my-3" />
                                        <p class={style['title-order-info-total']}>Total payment</p>
                                    </Card.Text>
                                    <Card.Text>
                                        <div className="d-flex">
                                            <Moment format="dddd, D MMMM YYYY" class={style["sub-title-order-info"]}>
                                                {order.showtime.date}
                                            </Moment>
                                            <p class={style["sub-title-time"]}> at {order.showtime.time}</p>
                                        </div>
                                        {/* <p class={style['sub-title-order-info']}>Tuesday, 07 July 2020 at 02:00pm</p> */}
                                        <hr className="my-2" />
                                        <p class={style['sub-title-order-info']}>{order.movie[0].movieName}</p>
                                        <hr className="my-3" />
                                        <p class={style['sub-title-order-info']}>{order.cinema.name}</p>
                                        <hr className="my-3" />
                                        <p class={style['sub-title-order-info']}>{order.seat.length} pieces</p>
                                        <hr className="my-3" />
                                        <p class={style['sub-title-order-info-total']}>IDR {order.seat.length * order.cinema.price}</p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <p class={style['text-title-info']}>Choose a Payment Method</p>
                            <Card className={style['card-choose-info1']}>
                                <Card.Body className={style['logo-payment-card']} >
                                    <Card.Text className={style['card-payment']}>
                                        <img class={style['card-img-logo-google']} onClick={handlePayment} src={google_pay} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment']}>
                                        <img class={style['card-img-logo-visa']} src={logo_visa} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment']}>
                                        <img class={style['card-img-logo-gopay']} src={GoPay} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment']}>
                                        <img class={style['card-img-logo-paypal']} src={logos_paypal} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment']}>
                                        <img class={style['card-img-logo-dana']} src={LogoDANA} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment1']}>
                                        <img class={style['card-img-logo']} src={Bank_BCA} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment1']}>
                                        <img class={style['card-img-logo']} src={Bank_BRI} alt="payment-method" />
                                    </Card.Text>
                                    <Card.Text className={style['card-payment']}>
                                        <img class={style['card-img-logo-ovo']} src={ovo} alt="payment-method" />
                                    </Card.Text>
                                </Card.Body>
                                <div class={style.or}>
                                    <hr></hr>
                                    <p class={style['text-or']}>or</p>
                                    <hr></hr>
                                </div>
                                <p class={style['sub-text-or']}>Pay via cash.<span>See how it work</span> </p>
                            </Card>
                        </div>
                        <div class="col-lg-4">
                            <p class={style['text-title-info']}> Personal Info</p>
                            <Card className={style['card-choose-info2']}>
                                <Card.Body >
                                    <form class={style['form-inline-custom']}>
                                        <label>Fullname</label>
                                        <input id="text" type="text" placeholder="Your Name" />
                                        <label>Email</label>
                                        <input id="email" type="text" placeholder="Your Email" />
                                        <label>Phone Number</label>
                                        <input id="number" type="text" placeholder="Your Phone Number" />
                                        {/* <div className={style['form-group']}>
                                            <span class="fa fa-exclamation-triangle" id={style['form-control-icon']}></span>
                                            <input className={style['form-control']} type="text" placeholder="Fill your data correctly." />
                                        </div> */}
                                    </form>
                                </Card.Body>
                            </Card>
                        </div>
                        <Button title="Previous Step" btn="btn-change-order" color="white" onClick={handleBack} />
                        <Button title="Pay Your Order" btn="btn-checkout" color="purple" onClick={handleNext} />
                    </div>
                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(CardsPayment);
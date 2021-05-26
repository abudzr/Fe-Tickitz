import React, { Fragment, useRef } from 'react'
import style from './card.module.css'
import Button from '../Button'
import { withRouter } from "react-router-dom";
import qr from "../../assets/img/QR.png";
import tickitz from "../../assets/img/tickitz.png"
import { useSelector } from "react-redux";
import Moment from 'react-moment';
import { exportComponentAsJPEG } from "react-component-export-image";
import ReactToPrint from "react-to-print";
import printer from '../../assets/img/printer 1.png'

function CardTickets() {
    // const dispatch = useDispatch();
    const componentRef = useRef();
    const { order } = useSelector((state) => state.order);
    // handleBack = () => {
    //     this.props.history.push('/order')
    // }

    return (
        <Fragment>
            <div className={style.tickets}>
                <div className="container">
                    <div className={style['card-tickets']}>
                        <p className={style['title-tickets']}>Proof of Payment</p>
                        <div className={style['card-second']} ref={componentRef}>
                            <div className={style['card-first']}>
                                <img className={style.img} src={tickitz} alt="logo" />
                                <p className={style['title-card-first']}>Admit One</p>

                                <img className={style.img} src={tickitz} alt="logo" />
                            </div>
                            <div className="row">
                                <div class="col-lg-8 col-8">
                                    <div className="row">
                                        <div className="col-lg-12 col-6">
                                            <p className={style['title-card-second']}>Movie</p>
                                            <p className={style['content-card-second']}>{order.movie[0].movieName}</p>
                                        </div>
                                        <div className="col-6" id={style.category}>
                                            <p className={style["title-card-second"]}>Category</p>
                                            <p className={style['sub-content']}>PG-13</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className={[["col-lg-4"], ["col-4"], style["mobile-content"]].join(" ")}>
                                            <p className={style["title-card-second"]}>Date</p>
                                            <Moment format="D MMMM " className={style["sub-content"]}>
                                                {order.showtime.date}
                                            </Moment>
                                            {/* <p className={style['sub-content']}>07 July</p> */}
                                            <p className={[["mt-3"], style["title-card-second"]].join(" ")}>Count</p>
                                            <p className={style['sub-content']}>{order.seat.length} pieces</p>
                                        </div>
                                        <div className={[["col-lg-4"], ["col-4"], style["mobile-content"]].join(" ")}>
                                            <p className={style["title-card-second"]}>Time</p>
                                            <p className={style['sub-content']}>{order.showtime.time}</p>
                                            <p className={style["title-card-second"]}>Seats</p>
                                            <p className={style['sub-content']}>{order.seat.join(", ")}</p>
                                        </div>
                                        <div className={[["col-lg-4"], ["col-4"], style["mobile-content"]].join(" ")}>
                                            <p className={style["title-card-second"]} id={style['category-none']}>Category</p>
                                            <p className={style['sub-content']} id={style['category-none']}>PG-13</p>
                                            <p className={style["title-card-second-price"]}>Price</p>
                                            <p className={style['sub-content-price']}>IDR {order.seat.length * order.cinema.price}</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 " id={style['price-mobile']}>
                                                <p className={style["title-price"]}>Total</p>
                                                <p className={style['sub-price']}>IDR {order.seat.length * order.cinema.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={style['circle-top']}></div>
                                <div className={style['circle-bottom']}></div>
                                <div className={style['line-vertical']}></div>
                                {/* <div class="col-lg-4 col-12"> */}
                                <div className={style.qr}>
                                    <img src={qr} alt="qr" />
                                </div>
                                {/* </div> */}
                            </div>
                        </div>

                        <div className="row">
                            <div className={style.button}>
                                <i class="fa fa-download " id={style['icon-download']} />
                                <Button title="Download" btn="btn-download" color="white" onClick={() =>
                                    exportComponentAsJPEG(componentRef, {
                                        fileName: `tickitz-${new Date().getTime()}`,
                                    })
                                } />
                                <ReactToPrint
                                    trigger={() => (
                                        <Button title="Print" btn="btn-print" color="white">
                                            <img src={printer} height="20" width="20" alt="printer" />
                                            {/* <i class="fa fa-print icon-pint " id={style['icon-print']} /> */}
                                        </Button>
                                    )}
                                    content={() => componentRef.current}
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(CardTickets);
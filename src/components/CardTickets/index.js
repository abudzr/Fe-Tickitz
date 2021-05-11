import React, { Component, Fragment } from 'react'
import style from './card.module.css'
import Button from '../Button'
import { withRouter } from "react-router-dom";
import qr from "../../assets/img/QR.png";



class CardTickets extends Component {

    // handleBack = () => {
    //     this.props.history.push('/order')
    // }

    render() {
        return (
            <Fragment>
                <div className={style.tickets}>
                    <div className="container">
                        <div className={style['card-tickets']}>
                            <p className={style['title-tickets']}>Proof of Payment</p>
                            <div className={style['card-first']}>
                                <img className={style.img} src="https://bookingtickitz.netlify.app/assets/img/tickitz.png" alt="logo" />
                                <p className={style['title-card-first']}>Admit One</p>

                                <img className={style.img} src="https://bookingtickitz.netlify.app/assets/img/tickitz.png" alt="logo" />
                            </div>
                            <div className={style['card-second']}>
                                <div className="row">
                                    <div class="col-lg-8 col-12">
                                        <div className="row">
                                            <div className="col-lg-12 col-6">
                                                <p className={style['title-card-second']}>Movie</p>
                                                <p className={style['content-card-second']}>Spider-Man: Homecoming</p>
                                            </div>
                                            <div className="col-6" id={style.category}>
                                                <p className={style["title-card-second"]}>Category</p>
                                                <p className={style['sub-content']}>PG-13</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-4 col-6">
                                                <p className={style["title-card-second"]}>Date</p>
                                                <p className={style['sub-content']}>07 July</p>
                                                <p className={style["title-card-second"]}>Count</p>
                                                <p className={style['sub-content']}>3 pieces</p>
                                            </div>
                                            <div className="col-lg-4 col-6">
                                                <p className={style["title-card-second"]}>Time</p>
                                                <p className={style['sub-content']}>02:00pm</p>
                                                <p className={style["title-card-second"]}>Seats</p>
                                                <p className={style['sub-content']}>C4, C5, C6</p>
                                            </div>
                                            <div className="col-lg-4 col-12">
                                                <p className={style["title-card-second"]} id={style['category-none']}>Category</p>
                                                <p className={style['sub-content']} id={style['category-none']}>PG-13</p>
                                                <p className={style["title-card-second-price"]}>Price</p>
                                                <p className={style['sub-content-price']}>$30.00</p>

                                            </div>
                                            <div className="row">
                                                <div className="col-12 " id={style['price-mobile']}>
                                                    <p className={style["title-price"]}>Total</p>
                                                    <p className={style['sub-price']}>$30.00</p>
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
                                    <Button title="Download" btn="btn-download" color="white" onClick="" />
                                    <i class="fa fa-print icon-pint " id={style['icon-print']} />
                                    <Button title="Print" btn="btn-print" color="white" onClick="" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>


            </Fragment>
        )
    }
}


export default withRouter(CardTickets);
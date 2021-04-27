import React, { Component, Fragment } from 'react'
import style from './card.module.css'
import { Card, Dropdown } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";



class CardsPayment extends Component {

    handleBack = () => {
        this.props.history.push('/order')
    }
    handleNext = () => {
        this.props.history.push('/tickets')
    }
    render() {
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
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['title-order-info']}>Movie title</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['title-order-info']}>Cinema name</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['title-order-info']}>Number of tickets</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['title-order-info-total']}>Total payment</p>
                                        </Card.Text>
                                        <Card.Text>
                                            <p class={style['sub-title-order-info']}>Tuesday, 07 July 2020 at 02:00pm</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['sub-title-order-info']}>Spider-Man: Homecoming</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['sub-title-order-info']}>CineOne21 Cinema</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['sub-title-order-info']}>3 pieces</p>
                                            <Dropdown.Divider className={style.line} />
                                            <p class={style['sub-title-order-info-total']}>$30,00</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <p class={style['text-title-info']}>Choose a Payment Method</p>
                                <Card className={style['card-choose-info1']}>
                                    <Card.Body className={style['logo-payment-card']}>
                                        <Card.Text className={style['card-payment']}>
                                            <img class={style['card-img-logo-google']} src="https://bookingtickitz.netlify.app/assets/img/google_pay.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment']}>
                                            <img class={style['card-img-logo-visa']} src="https://bookingtickitz.netlify.app/assets/img/logo_visa.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment']}>
                                            <img class={style['card-img-logo-gopay']} src="https://bookingtickitz.netlify.app/assets/img/GoPay.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment']}>
                                            <img class={style['card-img-logo-paypal']} src="https://bookingtickitz.netlify.app/assets/img/logos_paypal.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment']}>
                                            <img class={style['card-img-logo-dana']} src="https://bookingtickitz.netlify.app/assets/img/LogoDANA.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment1']}>
                                            <img class={style['card-img-logo']} src="https://bookingtickitz.netlify.app/assets/img/Bank_BCA.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment1']}>
                                            <img class={style['card-img-logo']} src="https://bookingtickitz.netlify.app/assets/img/Bank_BRI.png" />
                                        </Card.Text>
                                        <Card.Text className={style['card-payment']}>
                                            <img class={style['card-img-logo-ovo']} src="https://bookingtickitz.netlify.app/assets/img/ovo.png" />
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
                                            <input id="text" type="text" placeholder="Jonas El Rodriguez" />
                                            <label>Email</label>
                                            <input id="email" type="text" placeholder="jonasrodri123@gmail.com" />
                                            <label>Phone Number</label>
                                            <input id="number" type="text" placeholder="+6281445687121" />
                                            <div className={style['form-group']}>
                                                <span class="fa fa-exclamation-triangle" id={style['form-control-icon']}></span>
                                                <input className={style['form-control']} type="text" placeholder="Fill your data correctly." />
                                            </div>
                                        </form>
                                    </Card.Body>
                                </Card>
                            </div>
                            <Button title="Previous Step" btn="btn-change-order" color="white" onClick={this.handleBack} />
                            <Button title="Pay Your Order" btn="btn-checkout" color="purple" onClick={this.handleNext} />
                        </div>
                    </div>
                </div>


            </Fragment>
        )
    }
}


export default withRouter(CardsPayment);
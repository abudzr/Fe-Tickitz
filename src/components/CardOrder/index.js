import React, { Fragment } from 'react'
// import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";
import style from './card.module.css'
import { Dropdown } from 'react-bootstrap';
import Button from '../Button'
import seat1 from '../../assets/img/seat1.PNG'
import infoOrder from '../../assets/img/infoOrder.png'


const CardsOrder = (props) => {



    return (
        <Fragment>
            <div className="container">
                <div className={style['choose-seat']}>
                    <div class="row">
                        <div class="col-7 col-lg-8">
                            <p class={style['text-title-order']}>Choose Your Seat</p>
                            <div class={style['card-choose-seat']}>
                                <img class={style['card-img-seat']} src={seat1} alt="seat" />
                                <img class={style['card-img-seat1']} src="https://bookingtickitz.netlify.app/assets/img/seat2.PNG" alt="seat" />
                            </div>

                        </div>
                        <div class="card-order-info col-6 col-lg-4">
                            <p class={style['text-title-order1']}>Order Info</p>
                            <div class={style['card-choose-seat1']}>
                                <img class={style['card-img-order']} src={infoOrder} alt="seat" />
                                <p class={style['title-pay']}>CineOne21 Cinema</p>
                                <div class={style['order-info']}>
                                    <div class={style['sub-order-info']}>
                                        <p class={style['title-order']}>Movie selected</p>
                                        <p class={style['title-order']}>Tuesday, 07 July 2020</p>
                                        <p class={style['title-order']}>One ticket price</p>
                                        <p class={style['title-order']}>Seat choosed</p>
                                    </div>
                                    <div class={style['sub-order-info']}>
                                        <p class={style['sub-title-order']}>Spider-Man: Homecoming</p>
                                        <p class={style['sub-title-order']}>02:00pm</p>
                                        <p class={style['sub-title-order']}>Rp30.000</p>
                                        <p class={style['sub-title-order']}>C4, C5, C6</p>
                                    </div>
                                </div>
                                <hr></hr>
                                <div class={style.pay}>
                                    <p class={style['title-pay-order']}>Total Payment</p>
                                    <p class={style['sub-title-pay']}>Rp90.000</p>
                                </div>
                            </div>

                            {/* <!-- ini untuk mobile version --> */}
                            <div class={style['card-choose-seat2']}>
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
                            </div>
                            {/* <!-- isi konten --> */}
                        </div>
                        <Button title="Add new seat" btn="btn-add-new-seat" color="white" onClick={props.Add} />
                        <Button title="Change your movie" btn="btn-change-order" color="white" onClick={props.Change} />
                        <Button title="Checkout now" btn="btn-checkout" color="purple" onClick={props.Payment} />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}


export default withRouter(CardsOrder);
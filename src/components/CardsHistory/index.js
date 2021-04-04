import React, { Component, Fragment, useState } from 'react'
import style from './card.module.css'
import { Card, Nav, Form, Dropdown } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";
import star from "../../assets/img/Vector.png";



const CardsHistory = (props) => {

    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-lg-4">
                            <div className={style['info-profile']}>
                                <div className={style['info-title-profile']}>
                                    <h2 className={style['title-info']}>Info</h2>
                                    <div class={style.circle}></div>
                                    <div class={style.circle}></div>
                                    <div class={style.circle}></div>
                                </div>
                                <div className={style['big-circle']}>
                                    <img class={style['img-user']} src={props.image} />
                                </div>
                                <h2 className={style['name-profile']}>{props.name}</h2>
                                <p className={style.job}>Moviegoers</p>
                                <hr />

                                <h2 className={style['loyalty-point']}>Loyalty Points</h2>
                                <div className={style.square}>
                                    <p className={style['loyalty-title']}>Moviegoers</p>
                                    <p className={style.point}>320 <span>point</span></p>
                                </div>
                                <div class={style['circle-loyalty']}></div>
                                <div class={style['circle-loyalty2']}></div>
                                <div className={style.star}>
                                    <img src={star} />
                                </div>

                                <p className={style['loyalty-subtitle']}>180 points become a master</p>
                                <div class="progress " id={style.progress}>
                                    <div class="progress-bar w-50" id={style['progress-bar']} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>

                        </div>
                        <div class="col-12 col-lg-8">
                            <div className={style['info-profile-right']}>
                                <Card className={style['card-account']}>
                                    <Card.Header className={style.cardheader}>
                                        <Nav variant="tabs" defaultActiveKey="#link">
                                            <Nav.Item>
                                                <Nav.Link href="/profile">Account Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#link">Order History</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body  >
                                        <div className={style['card-history']}>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <p className={style['title-history']}>Tuesday, 07 July 2020 - 04:30pm</p>
                                                    <p className={style['content-history']}>Spider-Man: Homecoming</p>
                                                </div>
                                                <img src="https://bookingtickitz.netlify.app/assets/img/sponsor1.png" className={style['img-history']} />

                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <Button title="Ticket in active" type="submit" btn="btn-active-history" color="green" onClick="" />
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className={style['show-detail']}>Show Details</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={style['card-history']}>
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <p className={style['title-history']}>Tuesday, 07 July 2020 - 04:30pm</p>
                                                    <p className={style['content-history']}>Spider-Man: Homecoming</p>
                                                </div>
                                                <img src="https://bookingtickitz.netlify.app/assets/img/sponsor1.png" className={style['img-history']} />

                                            </div>
                                            <hr />
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <Button title="Ticket in active" type="submit" btn="btn-active-history" color="green" onClick="" />
                                                </div>
                                                <div className="col-lg-4">
                                                    <p className={style['show-detail']}>Show Details</p>
                                                </div>
                                            </div>
                                        </div>



                                    </Card.Body>



                                </Card>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(CardsHistory);
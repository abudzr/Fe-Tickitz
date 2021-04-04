import React, { Component, Fragment, useState } from 'react'
import style from './card.module.css'
import { Card, Nav, Form, Dropdown } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";
import star from "../../assets/img/Vector.png";



const CardsProfile = (props) => {
    const [isPasswordShow, setisPasswordShow] = useState(false)
    const [isPasswordShow2, setisPasswordShow2] = useState(false)

    const tooglePasswordVisibility = (e) => {
        e.preventDefault();
        setisPasswordShow(!isPasswordShow);
    }

    const tooglePasswordVisibility2 = (e) => {
        e.preventDefault();
        setisPasswordShow2(!isPasswordShow2);
    }

    const hiddenFileInput = React.useRef(null);
    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }

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
                                    <Button title="Update" btn="btn-change-picture" color="white" onClick={handleClick} />
                                    <input type="file"
                                        ref={hiddenFileInput}
                                        onChange={props.changePicture}
                                        style={{ display: 'none' }}
                                    />
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
                                    <Card.Header>
                                        <Nav variant="tabs" defaultActiveKey="#first">
                                            <Nav.Item>
                                                <Nav.Link href="#first">Account Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="/history">Order History</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body  >
                                        <Card.Title className={style['detail-title']} id="#first" >Details Information</Card.Title>
                                        <hr />

                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-firstname']}>
                                                <label htmlFor="firstName">First Name</label><br />
                                                <input className={style['input-firstname']} id="firstName" name="firstName" type="text" value={props.first} placeholder={props.first} onChange={props.change} />
                                            </Form>
                                            <Form className={style['form-profile-lastName']}>
                                                <label htmlFor="lastName">Last Name</label><br />
                                                <input className={style['input-lastName']} id="lastName" name="lastName" type="text" value={props.last} placeholder={props.last} onChange={props.change} />
                                            </Form>
                                        </div>
                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-email']}>
                                                <label htmlFor="email">Email</label><br />
                                                <input className={style['input-email']} id="email" name="email" type="text" value={props.mail} placeholder={props.mail} onChange={props.change} />
                                            </Form>
                                            <Form className={style['form-profile-phone']}>
                                                <label htmlFor="phone">Phone Number</label><br />
                                                <input className={style['input-phone']} id="phone" name="phone" type="text" value={props.phonenumber} placeholder={props.phonenumber} onChange={props.change} />
                                            </Form>
                                        </div>

                                        <Card.Title className={style['detail-title2']}>Account and Privacy</Card.Title>
                                        <hr />
                                        <div className={style['form-profile']}>
                                            <Form className={style['form-profile-password']}>
                                                <label htmlFor="password">New Password</label><br />
                                                <input className={style['input-password']} id="password" name="password" value={props.pass}
                                                    type={(isPasswordShow) ? "text" : "password"} placeholder="Write your password" onChange={props.change} />
                                                <i className={`fa ${isPasswordShow ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility} />

                                            </Form>
                                            <Form className={style['form-profile-passwords']}>
                                                <label htmlFor="password">Confirm your password</label><br />
                                                <input className={style['input-password']} id="confirmPassword" name="password" value={props.pass}
                                                    type={(isPasswordShow2) ? "text" : "password"} placeholder="Confirm your password" onChange={props.change} />
                                                <i className={`fa ${isPasswordShow2 ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={tooglePasswordVisibility2} />
                                            </Form>
                                        </div>
                                        <Button title="Update changes" type="submit" btn="btn-update-changes" color="purple" onClick={props.update} />

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


export default withRouter(CardsProfile);
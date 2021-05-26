import React, { Fragment, useEffect, useState } from 'react'
import style from './card.module.css'
import { Card, Nav, Modal } from 'react-bootstrap';
import Button from '../Button'
import star from "../../assets/img/Vector.png";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getListTransaction } from '../../configs/redux/action/showtimes'
import Moment from 'react-moment';


const CardsHistory = (props) => {

    // const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const history = useHistory();
    // const { transaction } = useSelector((state) => state.showtimes);
    const [transaction, setTransaction] = useState([])
    const [show, setShow] = useState(false);
    const [detail, setDetail] = useState([])

    const handleClickAccount = (e) => {
        e.preventDefault()
        history.push('/profile')
    }
    const handleClose = () => setShow(false);
    const handleDetailHistory = (e) => {
        setShow(true)
        setDetail(e)
        // console.log(e)
    }
    useEffect(() => {
        const id = localStorage.getItem("id")
        dispatch(getListTransaction(id)).then((res) => {
            // console.log(res);
            setTransaction(res)
        })
            .catch((err) => {
                console.log(err);
            })
    }, [dispatch])
    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-4">
                            <div className={style['info-profile']}>
                                <div className={style['info-title-profile']}>
                                    <h2 className={style['title-info']}>Info</h2>
                                    <div className={style.circle}></div>
                                    <div className={style.circle}></div>
                                    <div className={style.circle}></div>
                                </div>
                                <div className={style['big-circle']}>
                                    <img className={style['img-user']} src={props.image} alt="profile-iamge" />
                                </div>
                                <h2 className={style['name-profile']}>{props.name}</h2>
                                <p className={style.job}>Moviegoers</p>
                                <hr />

                                <h2 className={style['loyalty-point']}>Loyalty Points</h2>
                                <div className={style.square}>
                                    <p className={style['loyalty-title']}>Moviegoers</p>
                                    <p className={style.point}>320 <span>point</span></p>
                                </div>
                                <div className={style['circle-loyalty']}></div>
                                <div className={style['circle-loyalty2']}></div>
                                <div className={style.star}>
                                    <img src={star} alt="star" />
                                </div>

                                <p className={style['loyalty-subtitle']}>180 points become a master</p>
                                <div className="progress " id={style.progress}>
                                    <div className="progress-bar w-50" id={style['progress-bar']} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>

                            </div>

                        </div>
                        <div className="col-12 col-lg-8">
                            <div className={style['info-profile-right']}>
                                <Card className={style['card-account']}>
                                    <Card.Header className={style.cardheader}>
                                        <Nav variant="tabs" defaultActiveKey="#link">
                                            <Nav.Item>
                                                <Nav.Link href="#" onClick={handleClickAccount}>Account Settings</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link href="#link">Order History</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </Card.Header>
                                    <Card.Body className={style['card-body']} >
                                        {transaction.map((item, index) => {
                                            return (
                                                <div className={style['card-history']} key={index}>
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <div className="d-flex">
                                                                <Moment format="dddd, D MMMM YYYY" class={style["title-history"]}>
                                                                    {item.createdAt}
                                                                </Moment>
                                                                <p className={style['title-history-time']}>  - {item.showtime}</p>
                                                            </div>
                                                            {/* <p className={style['title-history']}>Tuesday, 07 July 2020 - 04:30pm</p> */}
                                                            <p className={style['content-history']}>{item.movie}</p>
                                                        </div>
                                                        <img src={`${process.env.REACT_APP_API_RESTAPI}${item.image}`} className={style['img-history']} alt="sponsor" />
                                                    </div>
                                                    <hr />
                                                    <div className="row">
                                                        <div className="col-lg-8">
                                                            <Button title="Ticket in active" type="submit" btn="btn-active-history" color="green" onClick="" />
                                                        </div>
                                                        <div className="col-lg-4">
                                                            <p className={style['show-detail']}
                                                                onClick={(e) => {
                                                                    // handleShow()
                                                                    handleDetailHistory(item)
                                                                }}>Show Details</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </Card.Body>

                                </Card>
                            </div>
                        </div>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Detail History</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div>
                                    <div>
                                        <div className="d-flex">
                                            <p>Movie Name : </p>
                                            <p className={style["detail-history"]}>{detail.movie}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p>Cinema : </p>
                                            <p className={style["detail-history"]}>{detail.cinema} Cinema</p>
                                        </div>
                                        <div className="d-flex">
                                            <p>Seats : </p>
                                            <p className={style["detail-history"]}>{detail.seats}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p>Date & times :</p>
                                            <Moment format="dddd, D MMMM YYYY" className={style["detail-history"]}>
                                                {detail.createdAt}
                                            </Moment>
                                            <p className={style['title-history-time']}>  - {detail.showtime}</p>
                                        </div>
                                        <div className="d-flex">
                                            <p>Ticket :</p>
                                            <p className={style["detail-history"]}>{detail.ticketCount} pieces</p>
                                        </div>
                                        <div className="d-flex">
                                            <p>Total Payment :</p>
                                            <p className={style["detail-history"]}>IDR {detail.totalPayment} </p>
                                        </div>
                                    </div>
                                </div>
                            </Modal.Body>
                            <Modal.Footer>
                                <button className={style.btnDetail} onClick={handleClose}>
                                    Close
                                </button>
                                {/* <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button> */}
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(CardsHistory);
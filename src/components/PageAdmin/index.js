import React, { Component, Fragment } from 'react'
import style from './card.module.css'
import { Card, Dropdown, Container, Form } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";
import moment from 'moment'
import Moment from 'react-moment';

// const changeTimeMovie = (time) => {
//     return Moment(time).format("YYYY-MM-DD");
// }

const PageAdmin = (props) => {

    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">
                    <div class="row">
                        <div class="col-12 col-lg-8">
                            <p className={style['title-admin']}>Movie Description</p>
                            <div className={style['info-profile']}>
                                <div className={style['form-img-admin']}>
                                    <Card className={style['card-detail-movie']}>
                                        <Container>
                                            <Card.Img className={style['card-img-detail-movie']} src={props.image} />
                                        </Container>
                                    </Card>

                                    <Form className={style['form-admin']}>
                                        <label htmlFor="movieName">Movie Name</label><br />
                                        <input className={style['form-movie']} id="movieName" type="text" name="movieName" value={props.movie} placeholder={props.movie} onChange={props.change} />

                                        <label htmlFor="genre">Category</label><br />
                                        <input className={style['form-movie']} id="genre" name="genre" type="text" value={props.genremovie} placeholder={props.genremovie} onChange={props.change} />

                                        <div className={style['position-datetime']}>
                                            <label htmlFor="releaseDate">Release Date</label><br />
                                            {/* <Moment format='MMMM Do YYYY' > */}

                                            <input className={style['form-release']} id="releaseDate" name="releaseDate" type="text" value={props.release} placeholder={props.release} onChange={props.change} />
                                            {/* </Moment> */}
                                            <label className={style.duration} htmlFor="duration">Duration</label><br />
                                            <input className={style['form-release']} id="duration" name="duration" type="text" value={props.durations} placeholder={props.durations} onChange={props.change} />

                                        </div>
                                    </Form>

                                </div>
                                <div className={style['form-img-admin']}>
                                    <Form className={style['form-admin-director']}>
                                        <label htmlFor="directedBy">Director</label><br />
                                        <input className={style['input-director']} id="directedBy" name="directedBy" type="text" value={props.directed} placeholder={props.directed} onChange={props.change} />
                                    </Form>
                                    <Form className={style['form-admin-casts']}>
                                        <label htmlFor="casts">Casts</label><br />
                                        <input className={style['input-casts']} id="casts" name="casts" type="text" value={props.cast} placeholder={props.cast} onChange={props.change} />
                                    </Form>
                                </div>
                                <label htmlFor="synopsis">Synopsis</label><br />
                                <input className={style['input-synopsis']} id="synopsis" name="synopsis" type="text" value={props.synopsi} placeholder={props.synopsi} onChange={props.change} />
                            </div>

                        </div>
                        <div class="col-12 col-lg-4">
                            <p className={style['title-admin']}>Premiere Location</p>
                            <div className={style['info-profile-right']}>
                                <div  >
                                    <Dropdown className={style['dropdown-location']} >
                                        <i class="fab fas fa-map-marker-alt" id={style.marker} ></i>
                                        <Dropdown.Toggle className={style['button-location']} id="dropdown-basic">
                                            Location
                                                </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Jakarta</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Bandung</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Karawang</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <div className="row flex-wrap mt-4 pb-4 pt-2" id={style['admin-img-right']}>
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor.png" alt="adminimg" />
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor2.png" alt="adminimg" />
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor1.png" alt="adminimg" />
                                </div>
                                <div className="row flex-wrap mt-4 pb-4 pt-2" id={style['admin-img-right']}>
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor.png" alt="adminimg" />
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor2.png" alt="adminimg" />
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor1.png" alt="adminimg" />
                                </div>
                                <div className="row flex-wrap mt-4 pb-4 pt-2" id={style['admin-img-right']}>
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor.png" alt="adminimg" />
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor2.png" alt="adminimg" />
                                    <img className={style['img-admin']} src="https://bookingtickitz.netlify.app/assets/img/sponsor1.png" alt="adminimg" />
                                </div>
                            </div>
                            <Button title="Update" type="submit" btn="btn-update" color="yellow" onClick={props.update} />


                        </div>
                        {/* <Button title="Previous Step" btn="btn-change-order" color="white" onClick={this.handleBack} />
                            <Button title="Pay Your Order" btn="btn-checkout" color="purple" onClick={this.handleLogin} /> */}
                    </div>
                </div>
            </div>


        </Fragment>
    )
}


export default withRouter(PageAdmin);
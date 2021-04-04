import React, { Component, Fragment, useState, useRef } from 'react'
import style from './card.module.css'
import { Card, Dropdown, Container, Form } from 'react-bootstrap';
import Button from '../Button'
import { withRouter } from "react-router-dom";
import moment from 'moment'
import Moment from 'react-moment';
import Swal from "sweetalert2";
import axiosApiInstance from '../../helper/axios';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom'
import { createMovie } from '../../configs/redux/action/movie'
// const changeTimeMovie = (time) => {
//     return Moment(time).format("YYYY-MM-DD");
// }
import Image from '../../assets/img/Avengers.jpg'


export default function PageAdmin() {
    const dispatch = useDispatch()
    // const [data, setData] = useState({
    //     movieName: '',
    //     releaseDate: '',
    //     directedBy: '',
    //     duration: '',
    //     casts: '',
    //     synopsis: '',
    //     idGenre: ''
    // });

    // const [dataImage, setDataImage] = useState({
    //     image: {},
    // });

    // const [input, setInput] = useState();
    // const [imgUrl, setImgUrl] = useState(Image);
    // const hiddenFileInput = React.useRef(null);

    // const handleClick = (e) => {
    //     hiddenFileInput.current.click();
    // }
    // const handleChange = (e) => {
    //     const dataNew = { ...data };
    //     const target = e.target
    //     const value = target.value
    //     const name = target.name
    //     dataNew[name] = value;
    //     setData(dataNew);
    // }

    // const handleChangePicture = (e) => {
    //     setInput(e.target.files[0].name);
    //     setImgUrl(URL.createObjectURL(e.target.files[0]));
    //     setDataImage({
    //         image: e.target.files[0],
    //     });
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append("movieName", data.movieName);
    //     formData.append("releaseDate", data.releaseDate);
    //     formData.append("directedBy", data.directedBy);
    //     formData.append("duration", data.duration);
    //     formData.append("casts", data.casts);
    //     formData.append("synopsis", data.synopsis);
    //     formData.append("image", dataImage.image);
    //     formData.append("idGenre", data.idGenre);

    //     dispatch(createMovie(formData))
    //         .then((res) => {
    //             Swal.fire("", "Movie successfully created", "success")
    //         })
    //         .catch((err) => {
    //             Swal.fire("", "Failed to create Movie", "error");
    //         })
    // }
    return (
        <Fragment>
            <div className={style['cards-profile']}>
                <div className="container">

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


                    </div>
                </div>
            </div>


        </Fragment >
    )
}

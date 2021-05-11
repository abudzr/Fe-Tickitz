import React, { Fragment, useState, } from 'react'
import style from './card.module.css'
import { Card, Container, Form } from 'react-bootstrap';
import Button from '../Button'

import Swal from "sweetalert2";
import { useDispatch } from 'react-redux'
import { createMovie } from '../../configs/redux/action/movie'
// const changeTimeMovie = (time) => {
//     return Moment(time).format("YYYY-MM-DD");
// }
import Image from '../../assets/img/Avengers.jpg'


export default function PageAdmin() {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        movieName: '',
        releaseDate: '',
        directedBy: '',
        duration: '',
        casts: '',
        synopsis: '',
        idGenre: ''
    });

    const [dataImage, setDataImage] = useState({
        image: {},
    });

    const [input, setInput] = useState();
    const [imgUrl, setImgUrl] = useState(Image);
    const hiddenFileInput = React.useRef(null);

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }
    const handleChange = (e) => {
        const dataNew = { ...data };
        const target = e.target
        const value = target.value
        const name = target.name
        dataNew[name] = value;
        setData(dataNew);
    }

    const handleChangePicture = (e) => {
        setInput(e.target.files[0].name);
        setImgUrl(URL.createObjectURL(e.target.files[0]));
        setDataImage({
            image: e.target.files[0],
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("movieName", data.movieName);
        formData.append("releaseDate", data.releaseDate);
        formData.append("directedBy", data.directedBy);
        formData.append("duration", data.duration);
        formData.append("casts", data.casts);
        formData.append("synopsis", data.synopsis);
        formData.append("image", dataImage.image);
        formData.append("idGenre", data.idGenre);

        dispatch(createMovie(formData))
            .then((res) => {
                Swal.fire("", "Movie successfully created", "success")
            })
            .catch((err) => {
                Swal.fire("", "Failed to create Movie", "error");
            })
    }
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
                                            <Card.Img className={style['card-img-detail-movie']} src={imgUrl} />
                                            <Button title="Insert Picture" btn="btn-insert-picture" color="white" onClick={handleClick} />
                                            <input type="file"
                                                ref={hiddenFileInput}
                                                onChange={handleChangePicture}
                                                style={{ display: 'none' }}
                                            />
                                        </Container>
                                    </Card>

                                    <Form className={style['form-admin']}>
                                        <label htmlFor="movieName">Movie Name</label><br />
                                        <input className={style['form-movie']} id="movieName" type="text" name="movieName" value={data.movieName} placeholder="" onChange={handleChange} />

                                        <label htmlFor="idGenre">Category</label><br />
                                        <input className={style['form-movie']} id="idGenre" name="idGenre" type="text" value={data.idGenre} placeholder="" onChange={handleChange} />

                                        <div className={style['position-datetime']}>
                                            <label htmlFor="releaseDate">Release Date</label><br />
                                            {/* <Moment format='MMMM Do YYYY' > */}

                                            <input className={style['form-release']} id="releaseDate" name="releaseDate" type="text" value={data.releaseDate} placeholder="" onChange={handleChange} />
                                            {/* </Moment> */}
                                            <label className={style.duration} htmlFor="duration">Duration</label><br />
                                            <input className={style['form-release']} id="duration" name="duration" type="text" value={data.duration} placeholder="" onChange={handleChange} />

                                        </div>
                                    </Form>

                                </div>
                                <div className={style['form-img-admin']}>
                                    <Form className={style['form-admin-director']}>
                                        <label htmlFor="directedBy">Director</label><br />
                                        <input className={style['input-director']} id="directedBy" name="directedBy" type="text" value={data.directedBy} placeholder="" onChange={handleChange} />
                                    </Form>
                                    <Form className={style['form-admin-casts']}>
                                        <label htmlFor="casts">Casts</label><br />
                                        <input className={style['input-casts']} id="casts" name="casts" type="text" value={data.casts} placeholder="" onChange={handleChange} />
                                    </Form>
                                </div>
                                <label htmlFor="synopsis">Synopsis</label><br />
                                <input className={style['input-synopsis']} id="synopsis" name="synopsis" type="text" value={data.synopsis} placeholder="" onChange={handleChange} />
                            </div>
                            <Button title="Create" type="submit" btn="btn-update" color="yellow" onClick={handleSubmit} />
                        </div>
                        {/* <div class="col-12 col-lg-4">
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
                            </div> */}


                        {/* <Button title="Previous Step" btn="btn-change-order" color="white" onClick={this.handleBack} />
                            <Button title="Pay Your Order" btn="btn-checkout" color="purple" onClick={this.handleLogin} /> */}
                    </div>
                </div>
            </div>


        </Fragment >
    )
}
